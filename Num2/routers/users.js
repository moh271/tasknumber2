const express = require('express');
const users = require('../controllers/users')
const router = express.Router()


router.post('/' ,async (req,res) => {
    const {body}=req;
   await users.create(body)
    res.status(204).end()
    })

router.get('/' ,async(req,res) => {
    const allUser = await users.findAll()
    res.json(allUser)
    })

    router.get('/' ,async(req,res) => {
        const {id} = req.params;
        const user = await users.findById(id)
        if (!user){
            res.status(404).end()
            return
        }
        res.json(user)
        })

router.patch('/:id' ,async(req,res) => {
    const {body,params:{id}}=req
    await users.editById(id, body)
    res.status(204).end()
    })
    
router.delete('/:id' ,async(req,res) => {
    const {id} = req.params;
   await users.deleteById(id)
   res.status(204).end()
    })

module.exports=router
