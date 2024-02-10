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
            console.log('new',newItem);
            await newItem.save()
            res.status(201).json(newItem)
            
        }

        
    } catch (error) {
        console.log(error);
        res.status(409).json('couldnt add item at the moment please try after some time!')
        
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