const db = require("../Model");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const op = db.Sequelize.Op;

//SignUp
exports.signup = (req, res) =>{
    //Save user to DB
    User.create({
        username: req.body.username,
        email: req.body.email,
        password:bcrypt.hashSync (req.body.password, 8)
    }).then((user) =>{
            if(req.body.roles){
                Role.findAll({
                    where:{
                        name:{
                            [Op.or]: req.body.roles
                        }
                    }
            }).then((roles) =>{
                user.setRoles(roles).thrn(()=>{
                    res.send({message:"User was registered successfully"});
                });
            });
        }else{
            //user roleId = 1(user)
            user.setRoles([1]).then(() =>{
                res.send({massage: "User was register successfully"})
            });
        }
    })
    .catch((err) =>{
        res.status(500).send({massage: err.massage})
    });
};