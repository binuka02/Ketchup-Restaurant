const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const foodRoutes = require('./routes/food_route.js')
const AdminRoutes = require('./routes/admin_route.js')
const OrderRoutes = require('./routes/order_route.js')
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/uploads', express.static(path.resolve('./uploads')));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/food', foodRoutes);
app.use('/admin', AdminRoutes);
app.use('/order', OrderRoutes);