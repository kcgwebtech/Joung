const Sequelize = require('sequelize');

const database = new Sequelize(
    'aacount',
    'root',
    '5012s',
    {
        host:'localhost',
        dialect:'mysql'
    }
);

module.exports = database;