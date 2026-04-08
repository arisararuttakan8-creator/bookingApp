import User from "../models/User.js"


export const updateUser = async( req , res)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate( req.params.id , {$set:req.body} , {new:true})
        res.status(200).send( updatedUser)

    }catch(err){
        res.status(500).json(err)
    }

}

export const deleteUser = async( req , res)=>{
    try{
        await User.findByIdAndDelete( req.params.id )
        res.status(200).send( 'User has been deleted.')

    } catch(err){
        res.status(500).json(err)
    }

}

export const getUser = async( req , res)=>{
    try{
        const user = await User.findById( req.params.id )
        res.status(200).send( user)

    }catch(err){
        res.status(500).json(err)
    }

}

export const getUsers = async( req , res , next)=>{

    try{
        const users = await User.find()
        res.status(200).send( users)

    }catch(err){
        res.status(500).json(err)
    }

}