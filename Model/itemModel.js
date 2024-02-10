const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    id:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true,
        unique:true
        
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    }
})


const items = mongoose.model('items',itemSchema)

module.exports = items