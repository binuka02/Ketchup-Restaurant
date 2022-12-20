const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/restuarantDB', err => {
//     if(!err){
//         console.log('DB Connection Sucessful');
//     } else {
//         console.log('Error in Connection' + err);
//     }
// })
mongoose.set('strictQuery', true);


mongoose.connect('mongodb+srv://admin:NK0Bg4B6ASh1URiy@cluster0.6fae3rq.mongodb.net/restuarantDB?retryWrites=true&w=majority', err => {
    if(!err){
        console.log('DB Connection Sucessful');
    } else {
        console.log('Error in Connection' + err);
    }
})


//NK0Bg4B6ASh1URiy
module.exports = mongoose;