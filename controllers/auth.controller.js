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

//SignIn
exports.signin = (req, res) => {
    //SELECT * FROM users WHERE username = req.body.username
    User.findOne({
        where:{
        username: req.body.username
        }
    }).then(user => {
        if(!user){
            return res.status(404).send({massage:"User not found"})
        }
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(! passwordIsValid){
            return res.status(401).send ({
                accessToken: null,
                massage: "Invalid Password",
            });
        }
        const token = jwt.sign({id:user.id},
            config.secret,
            {
                algorithm:"HS256",
                allowInsecureKeySizes:true,
                expiresIn: 86400, //24hours = 60*60*24
            });
            let authorities = [];
            user.getRoles().then(roles =>{
                for(let i=0; i< roles.length; i++){
                    authorities.push("ROLES "+roles[i].name.toUpperCase());
                }
                res.status(200).send({
                    id:user.id,
                    username:user.username,
                    email:user.email,
                    roles:authorities,
                    accessToken: token
                })
            });
    }).catch(err =>{
        res.status(500).send({massage: err.massage})
    });
};