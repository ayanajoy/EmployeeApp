const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ayanajoy:ayana@cluster0.l9vrskn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() =>{
    console.log('db Connected')
})
.catch((err)=> {
    console.log(err)
})