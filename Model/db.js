const {Sequelize} = require("sequelize");
const dbConfig = require("../config/dbconfig");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:"mysql",
    dialectOptions:{
        ssl: {
            rejectUthorized: false,
        },
    },
    
});

async function testConection(){
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

testConection()

module.exports = sequelize