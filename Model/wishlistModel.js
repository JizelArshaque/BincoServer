const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
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
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }

})

const wishlists = mongoose.model("wishlists",wishlistSchema)

module.exports = wishlists