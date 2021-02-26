const express = require('express')
const app= express()

//import db
const db= require('./db/index')

//requerido para que nos tome el index.hml
app.use(express.static(__dirname+"/public"))

db.sync({force:false}).then(app.listen(3000,()=>{
    console.log("runing in port 3000 !!!");
}))