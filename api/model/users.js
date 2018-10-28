const Sequelize = require('sequelize');
const database = require('./database'); //내부모듈을 불러올 때 상대경로로 불러와야함

// users 모델(테이블) 정의
const users = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: Sequelize.STRING(30),
        uniqueKey: true,
    },
    user_pw: {
        type: Sequelize.STRING(30),
    }
}, {
    tableName : 'users',
    createdAt : false,
    updatedAt : false,
    deletedAt : false,
});

module.exports = users; //외부에서 쓸 수 있도록 함