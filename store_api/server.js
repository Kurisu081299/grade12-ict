const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConn = require('./config/db.config');
const app = express();
const port = process.env.PORT || 5000;

//routes
const productRoute = require('./route/productRoute');
const customerRoute = require('./route/customerRoute');
const cashierRoute = require('./route/cashierRoute');
const orderRoute = require('./route/orderRoute');

// middlewares
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api/v1/products', productRoute);
app.use('/api/v1/customers', customerRoute);
app.use('/api/v1/cashier', cashierRoute);
app.use('/api/v1/orders', orderRoute);

//start the server
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`);
})