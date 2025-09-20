const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
    nom:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    password:{
        type:String,
        default:""
    }
})

const userModel = mongoose.model("users",UserShema)

module.exports = userModel