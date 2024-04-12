const {Sequelize} = require('sequelize')
const sequelize = new Sequelize("expense_app",'root','node123@' , {
    dialect:'mysql',
    host: 'localhost',
})

module.exports = sequelize