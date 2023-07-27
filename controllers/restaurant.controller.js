const Restaurant = require('../Model/restautant.model')

Restaurant.createRestaurant = async(newRestaurant)=>{
    try{
        const createRestaurant = await Restaurant.create(newRestaurant)
        console.log("Created new restaurant");
        return createRestaurant.toJSON();
    } catch (error) {
        console.log("Cannot Create New Restaurent error:", error);
        throw error
    }
}

module.exports = Restaurant