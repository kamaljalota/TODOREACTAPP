const mongoose = require('mongoose');
const mongooseURL ="mongodb://localhost:27017/datanote";

mongoose.set('strictQuery', false);

const connectToMongo = ()=>{
    
    mongoose.connect(mongooseURL,()=>{
        console.log('Successfulllll')
    })
}

module.exports = connectToMongo;