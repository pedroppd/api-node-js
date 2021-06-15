const Sequelize = require('Sequelize')

const instance = new Sequelize(
    'petshop',
    'root',
    'admin',
    {
        host: '192.168.0.106',
        dialect: 'mysql'
    }
);


module.exports = instance;