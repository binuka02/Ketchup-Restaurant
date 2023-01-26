const express = require('express');
const router = express.Router();

const Admin = require('../models/admin.js');

router.post('/login', async(req, res) => {
    const {username, password} = req.body;
    console.log(username,password)
    if(!username || !password){
        res.status(404).json({msg:'Invalid username or password'});
        return;
    }

    const admin = await Admin.findOne({username: username, password: password});
    res.status(200).json(admin);
});

router.post('/register', async (req, res) => {
    const {firstName, lastName, username,email, password, } = req.body;
    console.log(firstName, lastName, username, email, password)
    const admin = await Admin.create({firstName: firstName, lastName: lastName, username: username,email:email, password: password});
    
    // if(!firstName || !lastName ||!username ||!password || !confirmpassword){
    //     return res.status(400).send({msg:"All fields are required"});
    // }

    res.status(201).json(admin);
});

module.exports = router;

