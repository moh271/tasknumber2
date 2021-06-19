const User = require('../models/users')
const create = (data)=>{
    return User.create(data).catch(console.log)
}
const findAll=() => {
    return User.findAll()
}

const findById=(id) => {
    return User.findById({where :{id} })
}

const editById=(id) => {
    return User.editById(data, ({where :{id} }))
}
const deleteById=(id) => {
    return User.deleteById({where :{id} })
}
module.exports = {
    create,
    findAll,
    findById,
    editById,
    deleteById
}