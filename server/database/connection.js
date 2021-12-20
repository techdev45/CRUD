const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        // mongodb connection
        const con = await mongoose.connect(process.env.MONGO_URI,{
          
        })
        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

    // const connectDB = () => {
    //     mongoose.connect(process.env.MONGO_URI, {
    
    //     }).then(con => {
    //     console.log(`MongoDB connected : ${con.connection.host}`)
    //      })
    // }

module.exports = connectDB;