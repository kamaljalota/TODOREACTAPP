const jwt = require('jsonwebtoken');
const JWTScret = "kamalj";

const fetch =(req,res,next) =>{
    const token = req.header('auth-token');
    if(!token){
        return res.json({errors :"token not valid"});
     }
    const data = jwt.verify(token,JWTScret);
    req.id = data.user.id;
    next();

}


module.exports = fetch;