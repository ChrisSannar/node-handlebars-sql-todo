const Sequelize = require("sequelize");

const seq = new Sequelize("todos", "root", "password", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = seq;