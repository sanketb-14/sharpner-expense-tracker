const {DataTypes} = require('sequelize')
const sequelize = require('../util/database')

const User = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true, 
        },
    },
})

module.exports = User;