
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const MONGO_URL = process.env.NODE_ENV?.trim() !== 'test' ? process.env.MONGO_URL : process.env.MONGO_URL_TEST;

mongoose.connect(MONGO_URL, err => {
    if(!err){
        console.log('DB Connection Sucessful');
    } else {
        console.log('Error in Connection' + err);
    }
})

module.exports = mongoose;


//Password:NK0Bg4B6ASh1URiy