const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
//client.jsx와 wordrelay.jsx를 합쳐서 app.js에서 실행
module.exports = {
    name: 'word-relay-setting',
    mode: 'development',  //실서비스 : production
    devtool: 'eval',
    resolve:{
        extensions:['.js', '.jsx', '.css']
    },
    //입력
    entry: {
        //client.jsx에서 wordrelay.jsx를 불러오고 있기 때문에 여기서는 안넣어줘도 된다.
        app:['./client'],
    },
    //entry파일 읽고 모듈 적용해서 output에줌
    module: {
        rules:[{
            //js파일과 jsx파일은 룰을 적용하겠다는 정규표현식
            test:/\.jsx?$/,
            //babel 룰
            loader:'babel-loader',
            //babel 옵션
            options:{
                //presets은 수많은 플러그인이 뭉친것
                presets:[
                    ['@babel/preset-env', {
                        targets:{
                            //한국에서 점유율 5%이상인 브라우저 지원
                            //'last 5 chrome versions' -> 크롬 최신에서 5버전 전까지만 지원
                            browsers:['> 1% in KR'],
                        },
                        debug: true,
                    }],
                     '@babel/preset-react'],
                plugins:[
                    //babel이 최신문법을 옛날것으로 바꿀때, 핫 리로딩까지 추가.
                    'react-refresh/babel',
            ],
            },
        }],
    },

    plugins:[
        new RefreshWebpackPlugin(),
    ],

    //출력
    output:{
        //현재 폴터와 dist 경로 합쳐줌.
        path:path.join(__dirname, 'dist'),
        filename:'app.js',
        publicPath:'/dist/',
    },

    //서버설정
    devServer:{
        publicPath:'/dist/',
        hot: true,
    },
};