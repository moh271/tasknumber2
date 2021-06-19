const Todo = require('../models/todos')
const user = require('../models/users')
const create = (data)=>{
    return Todo.create(data).catch(console.log)
}
const findAll=() => {
    return Todo.findAll()
}

const findById=(id) => {
    return Todo.findById({where :{id}, include:'user'})
}

const editById=(id) => {
    return Todo.editById(data, ({where :{id} }))
}
const deleteById=(id) => {
    return Todo.deleteById({where :{id} })
}
module.exports = {
    create,
    findAll,
    findById,
    editById,
    deleteById
}