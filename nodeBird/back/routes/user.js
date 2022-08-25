const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { Op } = require('sequelize');

const {User, Post, Image, Comment} = require('../models');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => {
    console.log(req.headers); //headers 에 쿠키들어있음
    try{
        if(req.user){
            const fullUserWithoutPassword = await User.findOne({
                where: {id: req.user.id},
                attributes:{
                    exclude: ['password']
                },
                include:[{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            });
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch(error){
        console.error(error);
        next(error);
    }
});

//특정 user의 게시글
router.get('/:userId/posts', async(req,res, next) => {
    try{
        const where = {UserId: req.params.userId};
        if(parseInt(req.query.lastId, 10)){ //초기 로딩이 아닐때
            where.id = {[Op.lt]: parseInt(req.query.lastId, 10)};
        }
        const posts = await Post.findAll({
            where,
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            },{
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }],
            }, {
                model: User, //좋아요 누른사람
                as: 'Likers',
                attributes: ['id'],
            }, {
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
            }, ]
        });
        res.status(200).json(posts);
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    //server error, 성공한경우 유저정보, reason(client error)
    passport.authenticate('local', (err, user, info) => {
        if(err){
            console.log(err);
            return next(err);
        }
        if(info){
            //로그인 잘못되면 401로 많이한다.(허가되지않음)
            return res.status(401).send(info.reason);
        }
        return req.login(user, async(loginErr) => {
            if(loginErr){
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: {id: user.id},
                attributes:{
                    exclude: ['password']
                },
                include:[{
                    model: Post,
                }, {
                    model: User,
                    as: 'Followings'
                }, {
                    model: User,
                    as: 'Followers'
                }]
            });
            //사용자 정보 Front로 넘겨줌
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});

router.post('/', isNotLoggedIn, async (req, res, next) => {
    //email에서 req.body.email와 같은거 찾기
    const exUser = await User.findOne({
        where: {
            email: req.body.email,
        }
    });
    if(exUser){
        return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 11);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('ok');
    } catch(error){
        console.error(error);
        next(error); //status 500
    }
});

router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});
/*
router.get('/kakao', passport.authenticate('kakao'));
router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/');
});
*/

router.patch('/nickname', isLoggedIn, async(req, res, next) => {
    try{
        //내 id의 닉네임을 front에서 받은 닉네임으로 수정
        await User.update({
            nickname: req.body.nickname,
        }, {
            where: {id: req.user.id},
        });
        res.status(200).json({nickname: parseInt(req.params.userId, 10)});
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.patch('/:userId/follow', isLoggedIn, async(req, res, next) => {
    try{
        const user = await User.findOne({where: {id: req.params.userId}}); //front에서 action.data가 된다. UserId꺼내 쓰면됨.
        if(!user){
            res.status(403).send('존재하지 않는 사용자를 팔로우할 수 없습니다.');
        }
        await user.addFollowers(req.user.id);
        res.status(200).json({UserId: parseInt(req.params.userId, 10)});
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.delete('/:userId/follow', isLoggedIn, async(req, res, next) => {
    try{
        const user = await User.findOne({where: {id: req.params.userId}});
        if(!user) res.status(403).send('존재하지 않는 사용자를 언팔로우할 수 없습니다.');
        await user.removeFollowers(req.user.id);
        res.status(200).json({UserId: parseInt(req.params.userId, 10)});
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.delete('/follower/:userId', isLoggedIn, async(req, res, next) => {
    try{
        const user = await User.findOne({where: {id: req.params.userId}});
        if(!user) res.status(403).send('존재하지 않는 사용자를 차단할 수 없습니다.');
        await user.removeFollowings(req.user.id);
        res.status(200).json({UserId: parseInt(req.params.userId, 10)});
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.get('/followers', isLoggedIn, async(req, res, next) => {
    try{
        const user = await User.findOne({where: {id: req.user.id}});
        if(!user){
            res.status(403).send('존재하지 않는 사용자입니다.');
        }
        const followers = await user.getFollowers({
            limit: parseInt(req.query.limit, 10),
        });
        res.status(200).json(followers);
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.get('/followings', isLoggedIn, async(req, res, next) => {
    try{
        const user = await User.findOne({where: {id: req.user.id}});
        if(!user){
            res.status(403).send('존재하지 않는 사용자입니다.');
        }
        const followings = await user.getFollowings({
            limit: parseInt(req.query.limit, 10),
        });
        res.status(200).json(followings);
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.get('/:userId', async (req, res, next) => {
    try{
        const fullUserWithoutPassword = await User.findOne({
            where: {id: req.params.userId},
            attributes:{
                exclude: ['password']
            },
            include:[{
                model: Post,
                attributes: ['id'],
            }, {
                model: User,
                as: 'Followings',
                attributes: ['id'],
            }, {
                model: User,
                as: 'Followers',
                attributes: ['id'],
            }]
        });
        
        if(fullUserWithoutPassword){
            //sequelize에서 보내준 정보 json데이터로 변환
            const data = fullUserWithoutPassword.toJSON();
            //about.js에서 사용. 개인정보 침해 예방
            data.Posts = data.Posts.length;
            data.Followers = data.Followers.length;
            data.Followings = data.Followings.length;
            res.status(200).json(data);
        } else {
            res.status(404).json('존재하지 않는 사용자입니다.');
        }
    } catch(error){
        console.error(error);
        next(error);
    }
});

module.exports = router;