const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const foodRoutes = require('./routes/food_route.js')
const AdminRoutes = require('./routes/admin_route.js')
const OrderRoutes = require('./routes/order_route.js')
const TableRoutes = require('./routes/table_route.js')
// const ChatRoutes = require('./routes/chat_route.js')
const path = require('path');
const http = require('http');
const { Server } = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    },
})
app.set('io', io);
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/uploads', express.static(path.resolve('./uploads')));

server.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/food', foodRoutes);
app.use('/admin', AdminRoutes);
app.use('/order', OrderRoutes);
app.use('/table', TableRoutes);
// app.use('/chat', ChatRoutes);