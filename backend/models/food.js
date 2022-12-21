const mongoose = require('mongoose');

const Food = mongoose.model('Food', {
    name: {type: String},
    price: {type: Number},
    description: {type: String},
    type: {type: String, enum: ['breakfast', 'lunch', 'dinner', 'drinks']},
    imageUrl: {type: String}
});

module.exports = Food;