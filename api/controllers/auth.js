import bcrypt from "bcryptjs";
import User from "../models/User.js"
import {createError} from "../utils/error.js"
import jwt from "jsonwebtoken"

export const register = async ( req , res , next )=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync( String(req.body.password) , salt);
        // const salt = bcrypt.genSaltSync(10)
        // const hash = bcrypt.hashSync( req.body.password , salt )
        const newUser = new User({
            userName : req.body.userName,
            email : req.body.email,
            password : hash
        })
        await newUser.save()
        res.status(200).send("User has been created.")
    }catch(err){
        next(err)
    }
    
}

export const login = async ( req , res , next )=>{
    try{
        // find user
        const user = await User.findOne({userName:req.body.username})

        if( !user ) return next( createError(404, "User not found!"))

        // check password
        const isPasswordCorrect = await bcrypt.compare( String(req.body.password) , user.password);  
        if( !isPasswordCorrect ) return next( createError(400, "Wrong password or username! "))
        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin},process.env.JWT)
        const {password , isAdmin, ...otherDetail} = user._doc
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json({...otherDetail})
    }catch(err){
        next(err)
    }
    
}

