const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const db = require('./models');
const passportConfig = require('./passport');


dotenv.config();
const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('DB 연결 성공');
    })
    .catch(console.error);

passportConfig();

app.use(morgan('dev'));
app.use(cors({
    //처음에는 true, 나중에는 실제 주소로 두면 된다.
    origin: 'http://localhost:3000',
    credentials: true,
}));

//현재 디렉터리와 uploads 의 경로를 합쳐준것을 express.static해줌
// 슬래시 의미는 localhost:3065임
app.use('/', express.static(path.join(__dirname, 'uploads')));
//front에서 받아온 데이터를 req.body에서 사용하기위해 선언
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('hello express');
});

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);

app.use((err, req, res, next) => {
    //직접 에러처리 미들웨어 넣기
})

app.listen(3065, () => {
    console.log("서버 실행중");
});