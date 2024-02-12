const wishlists = require('../Model/wishlistModel')

exports.addToWishlistController= async(req,res)=>{
    const {id, name, description, price, imageUrl} = req.body
    const userId = req.payload
    console.log(userId);

    try {

        const existingItem = await wishlists.findOne({id,userId})

        if(existingItem){
            res.status(418).json('item already in wiishlist!')
        }else{
            const newItem = new wishlists({
                id, name, description, price, imageUrl , userId
            })
            await newItem.save()
            res.status(211).json(newItem)
        }
        
    } catch (error) {
        
    }
}

exports.getFromWishlistController = async(req,res)=>{
    const userId =req.payload
    // console.log(userId);
    try {
        const items = await wishlists.find({userId})
        // console.log(items);
        if(items){
            res.status(200).json(items)
        }else{
            res.status(412).json('wishlist is empty')
        }
        
    } catch (error) {
        res.status(419).json(error)
        
    }
    
}

exports.removefromWishlistController = async(req,res)=>{
    const {id} = req.params
    try {
        await wishlists.findByIdAndDelete({_id:id})
        res.status(200).json('item removed from wishlist!')
        
    } catch (error) {
        res.status(418).json(error)
    }
}