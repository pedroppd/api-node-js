const Sequelize = require('Sequelize')

const instance = new Sequelize(
    'petshop',
    'admin',
    'admin',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);


module.exports = instance;