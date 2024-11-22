const express = require('express');
const cors = require('cors');
const dbConn = require('./config/db.config');
const app = express();
const port = process.env.PORT || 5001;

const cashierRoute = require('./route/cashierRoute');
const customerRoute = require('./route/customerRoute');
const purchaseRoute = require('./route/purchaseRoute');
const orderRoute = require('./route/orderRoute');
const productRoute = require('./route/productRoute');  

app.use(express.json());
app.use(cors());

app.use('/api/v1/cashier', cashierRoute);
app.use('/api/v1/customer', customerRoute);
app.use('/api/v1/purchase', purchaseRoute);
app.use('/api/v1/orders', orderRoute);
app.use('/api/v1/products', productRoute);  

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
