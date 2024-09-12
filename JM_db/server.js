const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConn = require('./config/db.config');
const app = express();
const port = process.env.PORT || 5000;

//Routes
const userRoute = require('./route/userRoutes');

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/api/v1/user', userRoute);



//Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})