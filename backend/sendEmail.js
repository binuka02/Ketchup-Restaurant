const { application } = require('express');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const nodemailer = require("nodemailer");


async function sendEmail(user, callback) {
    
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'ketchupfoods@gmail.com',
            pass: 'ifkjyscooejutngp',
        },
        tls:{
            rejectUnauthorized:false
        }
    });


let mailOptions = {
    from: '"ketchupfoods@gmail.com"', 
    to: user.email,
    subject: "Order Confirmation",
    html: `<b>Hello ${user.name}, <br>Your order has been placed succesfully.<br>Amount : ${user.amount}<br>Thank you for ordering with Ketchup Restaurant</b>`
    
};

let info = await transporter.sendMail(mailOptions);
callback(info);
} 


module.exports = sendEmail;
