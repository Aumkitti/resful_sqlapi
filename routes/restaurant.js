const express = require('express')
const router = express.Router()
const Restaurant = require('../controllers/restaurant.controller')



router.post('/restaurants',async(req,res)=>{
    try {
        const newRestaurant = req.body
        const createRestaurant = await Restaurant.createRestaurant(newRestaurant)
        res.status(202).json(createRestaurant)
    } catch (error){
        res.status(500).json({error:"Failed to create restaurant"});
    }
})

module.exports = router