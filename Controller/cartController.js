const carts = require('../Model/cartModel')

exports.addTocartController = async(req,res)=>{
    userId = req.payload
    const {id , name , description, price, imageUrl, quantity} = req.body
    
     try {
        const existingItem = await carts.findOne({userId,id})
        
        if(existingItem){
            existingItem.quantity += 1
            existingItem.TotalPrice = existingItem.price * existingItem.quantity
            // console.log(existingItem);

            await existingItem.save()
            res.status(201).json('item quantity incremnted by 1!')
        }else{
            const newItem = new carts({
                userId, id, name, description, price, imageUrl, quantity:1 , TotalPrice:price
            })
            await newItem.save()
            // console.log(newItem);
            res.status(201).json('item Added to your cart!')

        }
     } catch (error) {
        res.status(420).json(error)
     }
}

exports.getCartController= async(req,res)=>{
    const userId = req.payload

    try {
        const items = await carts.find({userId})
        res.status(200).json(items)
    } catch (error) {
        res.status(411).json(error)
        
    }
}

exports.removeFromcartController =async(req,res)=>{
    const {id} = req.params

    try {
        await carts.findByIdAndDelete({_id:id})
        res.status(211).json('item deleted')
        
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.incrementQuantityController = async(req,res)=>{
    const {id} = req.params

    try {
        const selectedItem = await carts.findOne({_id:id})

        if(selectedItem){
            selectedItem.quantity += 1
            selectedItem.TotalPrice = selectedItem.quantity * selectedItem.price
            selectedItem.save()
            res.status(201).json("item quantity has been incremnetd")
        }else{
            res.status(415).json('couldnt find the item!')

        }
    } catch (error) {
        res.status(411).json(error)
    }
}

exports.decrementQuantityController = async(req,res)=>{
    const {id}= req.params 
     try {
        const selectedItem = await carts.findOne({_id:id})
        selectedItem.quantity-=1
        if(selectedItem.quantity > 0 ){
            
            selectedItem.TotalPrice = selectedItem.quantity * selectedItem.price
            await selectedItem.save()
            res.status(211).json('item quantity decremented')
        }else{
            await carts.findByIdAndDelete({_id:id})
            res.status(211).json('item removed!')
        }
     } catch (error) {
      res.status(411).json(error)  
     }
}

exports.cartgoneController = async(req,res)=>{
    const userId =req.payload
    // console.log(userId);
    try {
        await carts.deleteMany({userId})
        res.status(202).json('cart is empty!')
        
    } catch (error) {
        res.status(401).json(error)
    }
}