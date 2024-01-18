const mongoose = require('mongoose')

const connectToDB = ()=>{
    let isConnected = false;
    if(isConnected)
    {
        console.log('Database connected')
    }
    try {
        mongoose.connect(process.env.MONGODB_URL)
        isConnected = true;
        console.log('Database connected')
        
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectToDB