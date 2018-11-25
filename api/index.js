
// const 는 상수, 한번 초기화하면 바꿀 수 없음. var 가 변수.
const express = require('express'); //express모듈을 불러옴.
const app = express(); //express 객체 생성해서 app에 바인드.
const port = 8888;

app.use(express.json());
app.use('/auth', require('./auth'));


// api동작시키기 위한 구문
app.listen(port); // port로 서버 열기
console.log('start server with 8888!');

const cookieParser = require('cookie-parser');
const Token = require('./token');

app.use(cookieParser());
app.use('/boards', requires('./boards'));

app.get('/testAPI', (req, res) => {
    res.json({
        data:{
            message: 'API 테스트 성공',
        }
    });
});