const mongoose =require('mongoose')

const cartShcema = new mongoose.Schema({
    id:{
        type:String,
        require:true,
        
    },
    name:{
        type:String,
        require:true,
        
        
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    TotalPrice:{
        type:Number,
        require:true
    }
})

const carts = mongoose.model("carts",cartShcema)

module.exports = carts