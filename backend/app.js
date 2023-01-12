const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const foodRoutes = require('./routes/food_route.js')
const AdminRoutes = require('./routes/admin_route.js')
const OrderRoutes = require('./routes/order_route.js')
const TableRoutes = require('./routes/table_route.js')
const path = require('path');
const http = require('http');
const { Server } = require("socket.io");
const nodemailer = require("nodemailer");
const sendEmail = require('./sendEmail.js');
const ejs = require("ejs");
const paypal = require("paypal-rest-sdk");
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    },
})
app.set('io', io);
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(bodyParser.json());
app.use('/uploads', express.static(path.resolve('./uploads')));

app.get("/email", async(req, res) => {
    const user = {
        name: "John Doe",
        email: "wabgsilva@gmail.com",
    }
    await sendEmail(user, info => {
                console.log(`The mail has beed send and the id is ${info.messageId}`);
                res.send(info);
             });
});

app.use('/food', foodRoutes);
app.use('/admin', AdminRoutes);
app.use('/order', OrderRoutes);
app.use('/table', TableRoutes);

server.listen(3000, () => console.log('Server started at port : 3000'));
