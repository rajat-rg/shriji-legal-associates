const mongoose = require('mongoose')

const contact = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    message:{
        type:String
    },
    read:{
        type:Boolean,
        default:false
    }
})

const contactSchema = mongoose.model('contactSchema',contact)
module.exports = contactSchema