const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const itemController = require('../Controller/itemController')


// register post

router.post('/register/user',userController.resgisterUserController)

// login get

router.post('/login/user',userController.loginUserController)

// add Item


router.post('/add/item',itemController.addItemController)

// get items

router.get('/get/items',itemController.getItemController)


module.exports = router