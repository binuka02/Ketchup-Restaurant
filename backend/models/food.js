const mongoose = require('mongoose');

const Food = mongoose.model('Food', {
    name: {type: String,required: true},
    price: {type: Number,required: true},
    description: {type: String,required: true},
    type: {type: String, enum: ['breakfast', 'lunch', 'dinner', 'drinks', 'desserts', 'soups'],required: true},
    imageUrl: {type: String}
})

module.exports = Food;