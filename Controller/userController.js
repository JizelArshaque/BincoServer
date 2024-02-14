const users = require('../Model/usermodel')
const jwt = require('jsonwebtoken')

// Register
exports.resgisterUserController = async (req,res)=>{
    const {username, email , password} = req.body

    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            // console.log(existingUser);
            res.status(402).json("Account Already Exists!")
        }else{
            const newUser = new users({
                username, email , password
            })
            // console.log(newUser);
            await newUser.save()

            res.status(201).json(newUser)
        }
    }catch(error){
        // console.log(error);
        res.status(418).json(error)
    }

}

// login

exports.loginUserController =async(req,res)=>{
    const {email , password } = req.body

    try {
        const existingUser = await users.findOne({email , password})
        if(existingUser){
            const token =jwt.sign({userId:existingUser._id},process.env.SECRETKEY)
            res.status(202).json({existingUser,token})

        }else{
            res.status(405).json('user NotFOund Or Invalid Credentials')
        }
    } catch (error) {
        res.status(418).json(error)
        
    }

}

exports.getUserDetails = async(req,res)=>{
    email = req.params.email
    console.log('hiiiL:', email);
    try {
        const dets = await users.find({email})
        console.log(dets);
        res.status(200).json(dets)
    } catch (error) {
        res.status(409).json(error)
        console.log('FFed');
        
    }
}
