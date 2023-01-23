const mongoose = require('mongoose');

const Admin = mongoose.model('Admin', {
    firstname: {type: String,required: true},
    lastname: {type: String,required: true},
    username: {type: String,required: true},
    password: {type: String, required: true},
    confirmpassword: {type: String, required: true},
});

module.exports = Admin;