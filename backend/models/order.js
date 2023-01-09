const mongoose = require('mongoose');

const Order = mongoose.model('Order', {
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    phone: {type: Number},
    address: {type: String},
    city: {type: String},
    amount: {type: Number},
    items: {type: Array},
})

module.exports = Order;