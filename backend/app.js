const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const routes = require('./routes/food_route.js')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/food', routes);