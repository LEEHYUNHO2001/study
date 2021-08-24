const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');
const passport = require('passport');

dotenv.config();
const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('DB 연결 성공');
    })
    .catch(console.error);

passportConfig();

app.use(cors({
    //나중에는 실제 주소로 두면 된다.
    origin: true,
    credentials: false,
}));
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

app.get('/posts', (req, res) => {
    res.json([
        {id:1, content: 'hello1'},
        {id:2, content: 'hello2'},
        {id:3, content: 'hello3'},
    ]);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log("서버 실행중");
});