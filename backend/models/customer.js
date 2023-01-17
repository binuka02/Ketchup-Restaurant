const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', {
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    phone: {type: Number},
    address: {type: String},
    city: {type: String}
})

module.exports = Customer;