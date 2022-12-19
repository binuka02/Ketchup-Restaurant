const mongoose = require('mongoose');

const Food = mongoose.model('Food', {
    name: {type: String},
    price: {type: Number},
    description: {type: String}
});

module.exports = Food;