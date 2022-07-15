let DB = "mongodb+srv://zerog:Centennial@zero1@survay.2xybep5.mongodb.net/?retryWrites=true&w=majority"

let mongoose = require('mongoose');


module.exports = function(){
    
    
    mongoose.connect(DB);

    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console,'connection error :  '));
    mongoDB.once('open',()=>{
        console.log('conected to MongoDB...');
    }) 

    return mongoDB;
}