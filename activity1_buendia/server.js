const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConn = require("./Config/db.config");
const app = express();
const port = process.env.PORT || 4000;

//Routes
const userRoute = require('./Route/userRoutes');

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api/v1/user', userRoute);


//Starting the server
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`);
})