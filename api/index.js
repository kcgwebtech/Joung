
// const 는 상수, 한번 초기화하면 바꿀 수 없음. var 가 변수.
const express = require('express'); //express모듈을 불러옴.
const app = express(); //express 객체 생성해서 app에 바인드.
const port = 8888;


// api를 만듬 : hi api호출하면 hi~를 출력해줌
// reqeust response 줄임말
// {}에 있는 함수 불러옴 callback함수
app.get('/hi', (req, res) => {
    res.send('hi~');
});

// api동작시키기 위한 구문
app.listen(port); // port로 서버 열기
console.log('start server with 8888!');