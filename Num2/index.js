const express = require('express')
const router = require('./routers')

const app=express()

app.use((req,res,next) => {

    next()
})

app.use(express.json())
app.use('./',router)

app.listen(3000, ()=>{
    console.log('thats ok ')
})