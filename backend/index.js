// import express to a variable express
const express = require('express');
require("./connection")
var empModel = require("./model/employee")
var cors = require('cors');
const { default: axios } = require('axios');

// initialize
const app = express();

// middleware
app.use(express.json())
app.use(cors()); 

// api creation
app.get('/', (req, res) => {
  res.send('Hello World')
})
// trial api
app.get('/trial', (req, res) => {
  res.send('Trial Message')
})

app.post('/add',async(req,res) => {
    try {
        await empModel(req.body).save()
        res.send({message: "Employee Added"})
    } catch (error) {
        console.log(error)
    }
})

app.get('/view',async(req,res) => {
    try {
        var data = await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/delete/:id',async(req,res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message: "Employee Deleted"})
    } catch (error) {
        console.log(error)
    }
})
app.put('/update/:id',async(req,res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message: "Data Updated"})
    } catch (error) {
        console.log(error)
    }
})


// port setting
app.listen(3000, () => {
    console.log("port is running at 3000")
})
