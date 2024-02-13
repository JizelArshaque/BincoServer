const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    fullname:{
        type:String,
        require:true
    },
    place:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    pincode:{
        type:Number,
        require:true
    },
    GTotal:{
        type:Number,
        require:true
    },
    dateString:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
})

const orders = mongoose.model("orders",orderSchema)

module.exports = orders