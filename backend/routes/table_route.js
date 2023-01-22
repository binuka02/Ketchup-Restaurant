const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Table = require('../models/table.js');


router.post('/', async (req, res) => {
    const {firstName, lastName, email, phone, date, time, seatcount} = req.body;
    console.log(firstName, lastName, email, phone, date, time, seatcount)
    const table = await Table.create({firstName: firstName, lastName: lastName, email: email, phone: phone, date: date, time: time, seatcount: seatcount});
    res.status(201).json(table);
});

router.get('/', async(req, res) => {
    const table = await Table.find();
    res.status(200).json(table);
});

module.exports = router;