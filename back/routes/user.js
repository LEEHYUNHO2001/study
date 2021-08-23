const express = require('express');
const bcrypt = require('bcrypt');
const {User} = require('../models');

const router = express.Router();

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

module.exports = router;