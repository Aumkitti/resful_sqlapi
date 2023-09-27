const { Sequelize } = require("sequelize");
const sequelize = require("./db");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users",{
        username:{
            type:sequelize.STRING,
        },
        email: {
            type:sequelize.STRING,
        },
        password: {
            type:sequelize.STRING,
        }
    });
    return User;
}