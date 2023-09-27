const { restart } = require("nodemon");
const Restaurant = require('../Model/restaurant.model')

Restaurant.createRestaurant = async(newRestaurant)=>{
    try{
        const createRestaurant = await Restaurant.create(newRestaurant)
        console.log("Created new restaurant");
        return createRestaurant.toJSON();
    } catch (error) {
        console.log("Cannot Create New Restaurent error:", error);
        throw error
    }
};

Restaurant.getAll = async () => {
    try {
        const restaurant = await Restaurant.findAll();
        return restaurant.map(restaurant => restaurant.toJSON());
    } catch (error) {
        console.error("error", error);
        throw error;
    }
};

Restaurant.getById = async (restaurantId) => {
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (restaurant) {
            return restaurant.toJSON();
        } else {
            throw {kind: "not_found"};
        }
    } catch (error) {
        console.error("error:", error);
        throw error;
    }
};

Restaurant.updateById = async (id, restaurantData) => {
    try {
        const [rowUpdated] = await Restaurant.update(restaurantData, {
            where: { id },
        });
        if (rowUpdated === 0){
            throw {kind: "not_found" };
        }
        return {id:id, ...restaurantData};
    }catch (error) {
        console.log("error:", error);
        throw error;
    }
};

Restaurant.removeById = async (id) =>{
    try {
        const rowDeleted = await Restaurant.destroy({where: { id } });
        if(rowDeleted === 0){
            throw { kind: "not_found" };
        }
        return true
    } catch (error){
        console.log("error:", error);
        throw error;
    }
};

module.exports = Restaurant