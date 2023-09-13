const router = require("../routes/restaurant.router.js");
const sql = require("./db");
//Constructor
const Restaurant = function (restaurant) {
    //Atrributes
    this.name = restaurant.name
    this.type = restaurant.type
    this.imageurl = restaurant.imageurl;
};

//Methods
Restaurant.create = (newRestaurant, result) => {
    //INSERT INTO restaurant SET name,type,imageurl VALUES("KFC","FASTFOOD","url")
    sql.query("INSERT INTO restaurant SET ?", newRestaurant, (err, res) => {
        //มี error เกิดขึ้น
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }
        //ไม่มี error เกิดขึ้น
        console.log("new restaurant created");
        result(null, {
            id: res.id,
            ...newRestaurant
        })
    });
}
//Get all restaurant
Restaurant.getAll = (result) => {
    //SELECT * FROM restautants
    sql.query("SELECT * FROM restaurant", (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }
        //ไม่มี error เกิดขึ้น
        console.log("new restaurant created");
        result(null, res);
    });
};
//Get by ID
Restaurant.getById = (restaurantId, result) => {
    // SELECT * FROM restaurant WHERE id = restaurantId
    sql.query("SELECT * FROM restaurant WHERE id = ?", [restaurantId], (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }

        if (res.length === 0) {
            // Restaurant with the given ID was not found
            result({
                message: "Restaurant not found [ID]"
            }, null);
            return;
        }

        // No error occurred and the restaurant was found
        console.log("Restaurant found");
        result(null, res);
    });
};

//Update
Restaurant.updateById = (restaurantId, updatedData, result) => {
    // UPDATE restaurant SET ... WHERE id = restaurantId
    sql.query("UPDATE restaurant SET ? WHERE id = ?", [updatedData, restaurantId], (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            // Restaurant with the given ID was not found
            result({
                message: "Restaurant not found [ID]"
            }, null);
            return;
        }

        // No error occurred and the restaurant was updated
        console.log("Restaurant updated");
        result(null, res);
    });
};

//Delete
Restaurant.deleteById = (restaurantId, result) => {
    // DELETE FROM restaurant WHERE id = restaurantId
    sql.query("DELETE FROM restaurant WHERE id = ?", [restaurantId], (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            // Restaurant with the given ID was not found
            result({
                message: "Restaurant not found [ID]"
            }, null);
            return;
        }

        // No error occurred and the restaurant was deleted
        console.log("Restaurant deleted");
        result(null, res);
    });
};










module.exports = Restaurant;