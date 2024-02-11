const items = require('../Model/itemModel')


exports.addItemController = async(req,res)=>{

    const {id, name, description, price, imageUrl} = req.body
    console.log('body',req.body);

    try {
        const existingItem = await items.findOne({id,name})

        if(existingItem){
            res.status(411).json('item already exists')
        }else{
            const newItem = new items({
                id, name, description, price, imageUrl
            })
            
            await newItem.save()
            res.status(201).json(newItem)
            
        }

        
    } catch (error) {
        console.log(error);
        res.status(409).json('couldnt add item because an item with same id or same name already exists! please try after some time!')
        
    }

}


exports.getItemController = async(req,res)=>{
    try {
        const allItems = await items.find()
        res.status(201).json(allItems)
    } catch (error) {
        res.status(418).json(error)
    }
}

exports.deleteItemController=async(req,res)=>{
    const {id}= req.params

    console.log(id);
    try {
        await items.findByIdAndDelete({_id:id})
        res.status(211).json('item Deleted')
        
        
    } catch (error) {
        res.status(418).json(error)
        
    }
}

exports.singleItemController=async(req,res)=>{
    const {id} = req.params
    // console.log(id);
    try {
        const item = await items.find({id})
        if(item){
            // console.log(item);
            res.status(201).json(item)
        }else{
            res.status(488).json('couldnt fetch item')
        }
        
    } catch (error) {
        res.status(418).json('Could not fecth item')
    }
}


exports.updateItemController=async(req,res)=>{
    const {id} =req.params
    const body = req.body
    const options = { new : true}


    try {
        const result = await items.findByIdAndUpdate( id , body , options)
        res.status(200).json(result)
        
    } catch (error) {
        res.status(418).json(error)
        
    }

}