import mongoose from "mongoose"
const {Schema} = mongoose

const UserShema = new mongoose.Schema({
    userName:{
        type: String,
        require: true,
        unique:true
    },
    email:{
        type: String,
        require: true,
        unique:true
    },
    password:{
        type: String,
        require: true
    },
    isAdmin:{
        type: Boolean,
        require: true
    }

},{timestamps:true})

export default mongoose.model('User', UserShema)