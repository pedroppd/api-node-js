const Sequelize = require('Sequelize');
const instance = require('../database')

const columns = {
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    flavor : {
        type: Sequelize.ENUM('Chocolate', 'Goiabinha', 'Chocolate Com Avelã', 'Banana', 'Acebolado'),
        allowNull: false
    },
    price : {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    expiration_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    weight : {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'cookie',
    timestamps: true
}

module.exports = instance.define('cookie', columns, options)