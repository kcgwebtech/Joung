const Sequelize = require('sequelize');

const database = new Sequelize(
    'account',
    'root',
    '5012s',
    {
        host:'localhost',
        dialect:'mysql'
    }
);

module.exports = database;
