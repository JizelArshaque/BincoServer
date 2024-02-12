const jwt = require('jsonwebtoken')


const jwtMiddleware = (req,res,next)=>{

    try {

        const token = req.headers['authorization'].split(' ')[1]
        console.log(token);

        const jwtresponse = jwt.verify(token,process.env.SECRETKEY)
        console.log(jwtresponse);
        req.payload=jwtresponse.userId
        next();


        
    } catch (error) {
        res.staus(401).json('Authorization failed! Please LOgin')
        
    }

}


module.exports = jwtMiddleware