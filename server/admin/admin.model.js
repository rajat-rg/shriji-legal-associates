const mongoose = require('mongoose')

const admin = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
})

const adminSchema = mongoose.model('adminSchema',admin)
module.exports = adminSchema