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

exports.getOrderController =async(req,res)=>{
    userId = req.payload
    try {
        const invoice = await orders.find({userId})
        // console.log(invoice);
        res.status(202).json(invoice)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.getAllOrdersController = async(req,res)=>{
    try {
        const allOrders = await orders.find()
        res.status(201).json(allOrders)
    } catch (error) {
        res.status(418).json(error)
        
    } 
}