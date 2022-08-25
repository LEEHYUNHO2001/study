const passport = require('passport');
const {Strategy : kakaoStrategy} = require('passport-kakao');
const {User} = require('../models');

module.exports = () => {
    passport.use(new kakaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: '/user/kakao/callback'
    }, async(accessToken, refreshToken, profile, done) => {
        console.log('kakao profile', profile);
        try{
            const exUser = await User.findOne({
                where: {snsId:profile.id, provider: 'kakao'}
            });
            if(exUser){
                return done(null, exUser);
            } else{
                const newUser = await User.create({
                    email: profile._json && profile._json.kaccount_email,
                    nickname: profile.displayName,
                    snsId: profile.id,
                    password: '123',
                    provider: 'kakao'
                });
                return done(null, newUser);
            }
        } catch(error){
            console.error(error);
            return done(error)           
        }

    }));
};