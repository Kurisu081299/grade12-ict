const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConn = require('./config/db.config');
const app = express();
const port = process.env.PORT || 5001;

// Routes
const cashierRoute = require('./route/cashierRoute');
const customerRoute = require('./route/customerRoute');
const orderRoute = require('./route/orderRoute');
const productsRoute = require('./route/productsRoute');
const purchaseRoute = require('./route/purchaseRoute');  

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/v1/cashier', cashierRoute);
app.use('/api/v1/customer', customerRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/products', productsRoute);
app.use('/api/v1/purchase', purchaseRoute);  
app.use('/api/v1/order', orderRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
