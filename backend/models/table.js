const mongoose = require('mongoose');

const Table = mongoose.model('Table', {
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phone: {type: Number},
    date: {type: Date},
    time: {type: TimeRanges},
    seatcount: {type: Number}
})

module.exports = Table;