const Sequelize = require('sequelize');

const database = new Sequelize(
    'kcg',
    'root',
    '5012s',
    {
        host:'localhost',
        dialect:'mysql'
    }
);

module.exports = database;
