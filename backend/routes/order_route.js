const express = require('express');
const router = express.Router();

const Order = require('../models/order.js');


router.post('/', async(req, res) => {
    const {firstname, lastname, email, phone, address, city, amount, items} = req.body;
    const amountNew = +amount
    console.log(firstname, lastname, email, phone, address, city, amount, items)
    const order = await Order.create({firstname: firstname, lastname: lastname, email: email, phone: phone, address: address, city: city, amount: amountNew, items: items});
    res.status(201).json({msg:"Order Success"});
});

router.get('/', async(req, res) => {
    const order = await Order.find();
    res.status(200).json(order);
});

module.exports = router;