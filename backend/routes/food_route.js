const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Food = require('../models/food.js');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, Date.now() + '.' + ext);
    },
});

const upload = multer({ storage: storage });


//GET food
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

router.get('/', async(req, res) => {
    const {type} = req.query;
    console.log(type)
    const query = {}
    if(type){
        query.type = type
    }
    const food = await Food.find(query);
    res.send(food);
})

//POST API
router.post('/',upload.single("foodImage"), (req, res) => {
    console.log(req.body)
    console.log(req.file)
    let imageUrl = ""
    if(req.file){
        imageUrl = "http://localhost:3000/uploads/" + req.file.filename;
    }
    let food = new Food({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        type: req.body.type,
        imageUrl
    })

    food.save((err, doc) => {
        if(err){
            console.log('Error in Post Data ' + err);
        } else {
            const io = req.app.get("io")
            io.emit("foodAdded", doc)
            res.status(201).send(doc);
        }
    })
})

//PUT API
router.patch('/:id',upload.single("foodImage"), (req, res) => {
    console.log("#inside put")
    console.log(req.params.id)

    console.log(req.body)
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
                const io = req.app.get("io")
            io.emit("foodUpdated", doc)
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
                const io = req.app.get("io")
            io.emit("foodDeleted", doc)
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

module.exports = router;