const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const itemController = require('../Controller/itemController')
const wishlistController = require('../Controller/wishlistController')
const jwtMiddleware = require('../Middleware/jwtmiddleware')



// register post

router.post('/register/user',userController.resgisterUserController)

// login get

router.post('/login/user',userController.loginUserController)

// add Item


router.post('/add/item',itemController.addItemController)

// get items

router.get('/get/items',itemController.getItemController)


// delete item

router.delete('/delete/item/:id',itemController.deleteItemController)

// get single item
router.get('/getsingle/item/:id',itemController.singleItemController)

// update

router.put('/update/item/:id',itemController.updateItemController)

// addtowishlist

router.post('/add/wishlist',jwtMiddleware,wishlistController.addToWishlistController)

// getfrom wishlist

router.get('/getwishlist/items',jwtMiddleware,wishlistController.getFromWishlistController)

// remove from wishlist items

router.delete('/remove/wishlistItem/:id',jwtMiddleware,wishlistController.removefromWishlistController)




module.exports = router