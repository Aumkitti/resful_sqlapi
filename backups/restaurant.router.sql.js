const express = require("express");
const router = express.Router();
const estaurant = require("../Model/restaurant.model");
const Restaurant = require("../Model/restaurant.model");

//Insert restaurant to database
//http://localhost:5000/restaurant
router.post("/restaurant", (req, res) => {
    //Create Restautant instance
    const newRestaurant = new Restaurant({
        name: req.body.name,
        type: req.body.type,
        imageurl: req.body.imageurl


    })
    //INSERT to DB
    Restaurant.create(newRestaurant , (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error accured while inserting the new restaurant"
            })
        } else {
            res.send(data);
        }
    })
})
//Get all Restaurant
router.get("/restaurant", (req, res) => {
    Restaurant.getAll ((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message ||
                    "Some error accured while inserting the new restaurant"

            });
        } else {
            res.send(data);
        }

    })
})

//Get by ID 
router.get("/restaurant/:id", (req, res) => {
    const restaurantId = req.params.id;

    Restaurant.getById(restaurantId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the restaurant"
            });
        } else if (!data) {
            res.status(404).send({
                message: "Restaurant not found [ID]"
            });
        } else {
            res.send(data);
        }
    });
});


//Update
router.put("/restaurant/:id", (req, res) => {
    const restaurantId = req.params.id;
    const updatedData = req.body; // Assuming the updated data is provided in the request body

    Restaurant.updateById(restaurantId, updatedData, (err, data) => {
        if (err) {
            if (err.message === "Restaurant not found") {
                res.status(404).send({
                    message: "Restaurant not found [ID]"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Some error occurred while updating the restaurant"
                });
            }
        } else {
            res.send(data);
        }
    });
});


//Delete
router.delete("/restaurant/:id", (req, res) => {
    const restaurantId = req.params.id;

    Restaurant.deleteById(restaurantId, (err, data) => {
        if (err) {
            if (err.message === "Restaurant not found") {
                res.status(404).send({
                    message: "Restaurant not found [ID]"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Some error occurred while deleting the restaurant"
                });
            }
        } else {
            res.send(data);
        }
    });
});







module.exports = router