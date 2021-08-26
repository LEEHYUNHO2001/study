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
            }, {
                model: User,
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
            PostId: req.params.postId, //우리는 데이터로 넘겨주어서 req.body.postId도 되긴하다.
            UserId: req.user.id,
        });
        res.status(201).json(comment)
    } catch(error){
        console.log(error);
        next(error);
    }
});

router.delete('/', (req, res) => {
    res.json({id:1});
});

module.exports = router;