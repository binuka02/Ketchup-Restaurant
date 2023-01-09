const mongoose = require('mongoose');

const Table = mongoose.model('Table', {
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phone: {type: Number},
    date: {type: String},
    time: {type: String},
    seatcount: {type: Number}
})

module.exports = Table;