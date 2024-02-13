const orders = require('../Model/ordersModel')

exports.addOrderController= async(req,res)=>{
    
    try {
        
        const userId = req.payload
        const { fullname, place, phone ,pincode, GTotal, dateString, status } = req.body 
        const newItem = new orders({
            userId, fullname, place, phone ,pincode, GTotal, dateString, status
        })
        await newItem.save()
        res.status(200).json('Order placed!')
        
    } catch (error) {
        res.status(400).json(error)
    }
}