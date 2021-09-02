const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const {Post, Comment, Image, User, Hashtag} = require('../models');
const {isLoggedIn} = require('./middlewares');

try{
    fs.accessSync('uploads');
} catch(error){
    console.log('uploads 폴더가 없으므로 생성합니다.')
    fs.mkdirSync('uploads')
}


const router = express.Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads')
        },
        filename(req, file, done){ //이현호.png
            const ext = path.extname(file.originalname); //확장자 추출(.png)
            const basename = path.basename(file.originalname, ext); //이름 추출(이현호)
            done(null, basename + '_' + new Date().getTime() + ext); //이현호12346765.png
        },
    }),
    limits: {fileSize: 20 * 1024 * 1024}, //20MB
});

router.post('/', isLoggedIn, upload.none(), async(req, res, next) => {
    try{
        const hashtags = req.body.content.match(/#[^\s#]+/g);
        const post = await Post.create({
            content:req.body.content,
            UserId: req.user.id, //passport덕에 로그인하면 정보 user에 들어가있음
        });
        if(hashtags){
            //slice는 앞에 # 제외하고 저장하기위해. db에 저장할때는 소문자로만.
            //findOrCreate는 해당 해시태그가 db에 없을때만 만들고 있으면 가져옴
            const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
                where : {name: tag.slice(1).toLowerCase() }, 
            }))); // [[#노드, true], [#리엑트, true]]
                await post.addHashtags(result.map((v) => v[0])); // 뒤에 ture, false 값 빼고 해시태그만 저장
        }
        if(req.body.image) {
            if(Array.isArray(req.body.image)){
                //이미지를 여러개올려서 배열로오면, sequelize에 아래와같이 create하는데..
                //하나하나 promise가됨. 그것을 한방에 images에 저장
                const images = await Promise.all(req.body.image.map((image) => Image.create({src:image})));
                //관계메서드 사용하여 Image db에 넣음
                await post.addImages(images);
            } else{
                const image = await Image.create({src:req.body.image});
                await post.addImages(image);
            }
        }
        const fullPost = await Post.findOne({
            where: {id: post.id},
            include:[{
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User, //댓글 작성자
                    attributes: ['id', 'nickname'],
                }]
            }, {
                model: User, //게시글 작성자
                attributes: ['id', 'nickname'],
            }, {
                model: User, //좋아요 누른사람
                as: 'Likers',
                attributes: ['id'],
            }]
        });
        res.status(201).json(fullPost)
    } catch(error){
        console.log(error);
        next(error);
    }
});

router.post('/images', isLoggedIn, upload.array('image'),async(req, res, next) => {
    console.log(req.files);
    res.json(req.files.map((v) => v.filename));
});

router.post('/:postId/retweet', isLoggedIn, async(req, res, next) => {
    try{
        const post = await Post.findOne({
            where: {id: req.params.postId},
            include: [{
                model: Post,
                as: 'Retweet',
            }],
        })
        if(!post){
            return res.status(403).send('존재하지 않는 게시물입니다.');
        }

        if(req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)){
            return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
        }
        //게시글이 리트윗한 게시글인지 보고, 아니면 post.id를 사용
        const retweetTargetId = post.Retweet || post.id;
        const exPost = await Post.findOne({
            where: {
                UserId: req.user.id,
                RetweetId: retweetTargetId,
            },
        });
        if(exPost){
            return res.status(403).send('이미 리트윗한 게시물입니다.');
        }
        const retweet = await Post.create({
            UserId: req.user.id,
            RetweetId: retweetTargetId,
            content: 'retweet',
        });
        //어떤 게시글이있고 그 게시글의 리트윗 게시글 가져오면서 그 리트윗 게시글의 작성자와 좋아요 이미지 가져옴
        //그러면서 내 게시글의 댓글가져오고 댓글 작성자까지 가져온다.
        const retweetWithPrevPost = await Post.findOne({
            where:{id: retweet.id},
            include: [{
                model: Post,
                as: 'Retweet',
                include:[{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: User,
                    as: 'Likers',
                    attributes: ['id'],
                }, {
                    model: Image,
                }],
            }, {
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }],
            }],
        });
        res.status(201).json(retweetWithPrevPost)
    } catch(error){
        console.log(error);
        next(error);
    }
});

//front에서 ${data.postId}를 back에서 postId라는 params로 받음
router.post('/:postId/comment', isLoggedIn, async(req, res, next) => {
    try{
        const post = await Post.findOne({
            where: {id: req.params.postId}
        })
        if(!post){
            return res.status(403).send('존재하지 않는 게시물입니다.');
        }
        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId, 10), //우리는 데이터로 넘겨주어서 req.body.postId도 되긴하다.
            UserId: req.user.id,
        });
        const fullComment = await Comment.findOne({
            where: {id: comment.id},
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }],
        });
        res.status(201).json(fullComment)
    } catch(error){
        console.log(error);
        next(error);
    }
});

//front에서 post.id를 data로 받아 넘겨준것을 back에서 params로 받음
router.patch('/:postId/like', isLoggedIn, async(req, res, next) => { 
    try{
        const post = await Post.findOne({where: {id: req.params.postId}});
        if(!post){
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.addLikers(req.user.id);
        res.json({PostId: post.id, UserId: req.user.id});
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.delete('/:postId/like', isLoggedIn, async(req, res, next) => { 
    try{
        const post = await Post.findOne({where: {id: req.params.postId}});
        if(!post){
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.removeLikers(req.user.id);
        res.json({PostId: post.id, UserId: req.user.id});
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.delete('/:postId', isLoggedIn, async(req, res, next) => {
    try{
        //sequelize에서 제거는 destroy
        await Post.destroy({
            where:{
                id: req.params.postId,
                UserId: req.user.id, //내 글만 지우기 가능
            }
        })
        res.json({PostId: parseInt(req.params.postId, 10)})

    } catch(error){
        console.error(error);
        next(error);
    }
});

module.exports = router;