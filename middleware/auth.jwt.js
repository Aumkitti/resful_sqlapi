const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../Model");
const User = db.user;

verifyToken = (req,res,next) =>{
    let token = req.header['x-access-token'];
    if(!token){
        return res.status(403).send({message: "no token provided!"});
    }
    jwt.verify(token, config.secret, (err, decode)=>{
        if(err){
            return res.status(401).send({
                massage:"Unauthorized!"
            })
        }
        req.userId = decoded.id;
        next();
    });
};
isAdmin = (req,res,next) =>{
    //SELECT * FROM user WHERE id = req.userId
    User.findByPk(req.userId).then( user =>{
        //SELECT * FROM role, users, user_roles WHERE user.id = user_roles.userId and role.id = user_roles.roleId
        user.getRoles().then(roles =>{
            for(let i=0; i< roles.length; i++){
                if(roles[i].name === "admin"){
                    next()
                    return;
                }
            }
            res.status(403).send({message:"Require Admin Role!"});
        return;
        }); 
    });
};
isModerator = (req,res,next) =>{
    //SELECT * FROM user WHERE id = req.userId
    User.findByPk(req.userId).then( user =>{
        //SELECT * FROM role, users, user_roles WHERE user.id = user_roles.userId and role.id = user_roles.roleId
        user.getRoles().then(roles =>{
            for(let i=0; i< roles.length; i++){
                if(roles[i].name === "moderator"){
                    next()
                    return;
                }
            }
            res.status(403).send({message:"Require Moderator Role!"});
        return;
        }); 
    });
};
isModeratorOrAdmin = (req,res,next) =>{
    //SELECT * FROM user WHERE id = req.userId
    User.findByPk(req.userId).then( user =>{
        //SELECT * FROM role, users, user_roles WHERE user.id = user_roles.userId and role.id = user_roles.roleId
        user.getRoles().then(roles =>{
            for(let i=0; i< roles.length; i++){
                if(roles[i].name === "moderator"){
                    next()
                    return;
                }
                if (roles[i].name === "admin"){
                    next();
                    return;
                }
            }
            res.status(403).send({message:"Require Moderator Role!"});
        return;
        }); 
    });
};
const authJwt = {
    verifyToken: verifyToken,
    isAdmin:isAdmin,
    isModerator:isModerator,
    isModeratorOradmin:isModeratorOradmin
};
module.exports = authJwt;