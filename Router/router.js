const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const itemController = require('../Controller/itemController')
const wishlistController = require('../Controller/wishlistController')
const orderController = require('../Controller/orderController')

const cartController = require('../Controller/cartController')
const jwtMiddleware = require('../Middleware/jwtmiddleware')



// register post

router.post('/register/user',userController.resgisterUserController)

// login get

router.post('/login/user',userController.loginUserController)

// getuserdetails
router.get('/getdets/:email',userController.getUserDetails)

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

// add to wishlist

router.post('/cart/item',jwtMiddleware,cartController.addTocartController)

// get from wishlist

router.get('/getcart/item',jwtMiddleware,cartController.getCartController)

// remove from cart

router.delete('/removecart/item/:id',cartController.removeFromcartController)

// increment quantity
router.get('/quantityInc/:id',cartController.incrementQuantityController)

// decrement quantity
router.get('/quantityDec/:id',cartController.decrementQuantityController)

// emptycart
router.delete('/cart/empty',jwtMiddleware,cartController.cartgoneController)

// ordercreations

router.post('/order/creation',jwtMiddleware,orderController.addOrderController)

// get orders
router.get('/get/order',jwtMiddleware,orderController.getOrderController)

// get all orders
router.get('/get/all/order',jwtMiddleware,orderController.getAllOrdersController)

// update order
router.put('/order/update/:id',orderController.orderUpdateController)



module.exports = router