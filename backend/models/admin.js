const mongoose = require('mongoose');

const Admin = mongoose.model('Admin', {
    firstName: {type: String,required: true},
    lastName: {type: String,required: true},
    email: {type: String,required: true},
    username: {type: String,required: true},
    password: {type: String, required: true},

});

module.exports = Admin;