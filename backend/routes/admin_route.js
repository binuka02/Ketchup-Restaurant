const express = require('express');
const router = express.Router();

const Admin = require('../models/admin.js');

router.post('/', async(req, res) => {
    const {username, password} = req.body;
    console.log(username,password)

    const admin = await Admin.findOne({username: username, password: password});
    if(!admin || !password){
        res.status(404).json({msg:'Invalid username or password'});
        return;
    }
    res.status(200).json(admin);
});

router.post('/', async (req, res) => {
    const {firstName, lastName, username, password, confirmpassword} = req.body;
    console.log(firstName, lastName, username, password, confirmpassword)
    const admin = await Admin.create({firstName: firstName, lastName: lastName, username: username, password: password, confirmpassword: confirmpassword});
    
    // if(!firstName || !lastName ||!username ||!password || !confirmpassword){
    //     return res.status(400).send({msg:"All fields are required"});
    // }

    res.status(201).json(admin);
});

module.exports = router;

