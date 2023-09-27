module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("rols",{
        id:{
            type:sequelize.INTEGER,
            primaryKey:true
        },
        name: {
            type:sequelize.STRING,
        },
    });
    return Role;
}