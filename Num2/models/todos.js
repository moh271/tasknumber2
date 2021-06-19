const {DataTypes} = require('sequelize');
const User = require('./users')
const sequelize = require('../db')

const Todo = sequelize.define('todos',{
    content: {
        type: DataTypes.STRING
    }
})
Todo.belongsTo(User)
Todo.sync({});
module.export=Todo
