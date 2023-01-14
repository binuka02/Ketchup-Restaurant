const express = require('express');
const router = express.Router();
const Order = require('../models/order.js');


router.post('/', async(req, res) => {
    const {firstname, lastname, email, phone, address, city} = req.body
    console.log(firstname, lastname, email, phone, address, city)
    const order = await Order.create({firstname: firstname, lastname: lastname, email: email, phone: phone, address: address, city: city});
    res.status(201).json({msg:"Customer Registered"});
});

module.exports = router;

