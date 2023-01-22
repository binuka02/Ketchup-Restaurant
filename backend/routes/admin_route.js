const express = require('express');
const router = express.Router();

const Admin = require('../models/admin.js');

router.post('/', async(req, res) => {
    const {username, password} = req.body;
    console.log(username,password)

    const admin = await Admin.findOne({username: username, password: password});
    if(!admin){
        res.status(404).json({msg:'Invalid username or password'});
        return
    }
    res.status(200).json(admin);
});

module.exports = router;

