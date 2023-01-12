// const { application } = require('express');
// const express = require('express');
// const router = express.Router();
// const ObjectId = require('mongoose').Types.ObjectId;

// app.post("/sendemail", (req, res) => {
//     console.log("sendemail");
//     let user = req.body;
//     sendMail(user, info => {
//         console.log(`The mail has beed send and the id is ${info.messageId}`);
//         res.send(info);
//     });
// });

// async function sendMail(user, callback) {
    
//     let transporter = nodemailer.createTransport({
//         host: "ketchupfoods@gmail.com",
//         port: 587,
//         secure: false,
//         auth: {
//             user: details.user,
//             pass: details.password,
//         }
//     });


// let mailOptions = {
//     from: '"ketchupfoods@gmail.com"', 
//     to: user.email,
//     subject: "Order Confirmation",
//     html: <b>Hello ${user.name}, <br></br>Your order has been placed succesfully.</b>,
// };

// let info = await transporter.sendMail(mailOptions);
// callback(info);
// } 