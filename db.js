const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoURI="mongodb://localhost:27017"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo");
    })
}

module.exports=connectToMongo;