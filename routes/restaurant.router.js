const express = require('express')
const router = express.Router()
const Restaurant = require('../controllers/restaurant.controller')



router.post('/restaurant',async(req,res)=>{
    try {
        const newRestaurant = req.body
        const createRestaurant = await Restaurant.createRestaurant(newRestaurant)
        res.status(202).json(createRestaurant)
    } catch (error){
        res.status(500).json({error:"Failed to create restaurant"});
    }
});

router.get("/restaurant", async(req, res)=>{
    try {
        const restaurant = await Restaurant.getAll();
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({error:"Failed to get all restaurant"});
    }
});

router.get("/restaurant/:id", async(req, res)=> {
    try {
        const restaurantId = req.params.id;
        const restaurant = await Restaurant.getById(restaurantId);
        res.json(restaurant)
    } catch (error) {
        if(error.kind === "not_found"){
            res.status(400).json({ error: "Restaurant not found"});
        } 
        res.status(500).json({error:"Failed to got a restaurant by Id"});
    }
});

router.put("/restaurant/:id", async (req, res)=>{
    try {
        const restaurantId = req.params.id;
        const restaurantData = req.body;
        const updateRestaurant = await Restaurant.updateById(restaurantId, restaurantData)
        res.status(200).json(updateRestaurant);
    }catch (error) {
        if(error.kind === "not_found"){
            res.status(400).json({ error: "Restaurant not found"});
        } else {
        res.status(500).json({error:"Failed to got a restaurant Data"});
        }
    }
});

router.delete("/restaurant/:id", async (req,res)=>{
    try {
        const restaurantId = req.params.id;
        const isDeleted = await Restaurant.removeById(restaurantId);
        if (isDeleted) {
            res
                .status(200)
                .json({
                    message: "Restaurant id" + restaurantId + "is deleted", isDeleted: isDeleted
                });
        }
    }catch (error){
        if (error.kind === "not_found") {
            res.status(404).json({ error: "Restaurant not found" });
        }else{
            res.status(500).json({ error: "Failed to update restaurant data"});
        }
    }
});
module.exports = router