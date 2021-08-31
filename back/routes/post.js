const express = require('express');

const {Post, Comment, Image, User} = require('../models');
const {isLoggedIn} = require('./middlewares');

const router = express.Router();

router.post('/', isLoggedIn, async(req, res, next) => {
    try{
        const post = await Post.create({
            content:req.body.content,
            UserId: req.user.id, //passport덕에 로그인하면 정보 user에 들어가있음
        });
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