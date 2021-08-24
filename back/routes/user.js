const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const {User, Post} = require('../models');
const db = require('../models');

const router = express.Router();

//server error, 성공한경우 유저정보, reason(client error)
router.post('/login', (req, res, next) => {
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

router.post('/', async (req, res, next) => {
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

router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
})

module.exports = router;