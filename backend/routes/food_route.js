const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Food = require('../models/food.js');

//GET Single food
router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        Food.findById(req.params.id, (err, doc) => {
            if(err){
                console.log('Error in GET food by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

//GET API
router.get('/', (req, res) => {
    Food.find((err, doc) => {
        if(err){
            console.log('Error in GET Data ' + err);
        } else {
            res.send(doc);
        }
    })
})

//POST API
router.post('/', (req, res) => {
    console.log(req.body)
    let food = new Food({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })

    food.save((err, doc) => {
        if(err){
            console.log('Error in Post Data ' + err);
        } else {
            res.send(doc);
        }
    })
})

//PUT API
router.put('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        let food = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }

        Food.findByIdAndUpdate(req.params.id, {$set :food}, {new: true}, (err, doc) => {
            if(err){
                console.log('Error in Update food by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

//DELETE Single Food
router.delete('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        Food.findByIdAndRemove(req.params.id, (err, doc) => {
            if(err){
                console.log('Error in DELETE food by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

module.exports = router;