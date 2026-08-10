const express = require('express');
const app = express();

const dotenv = require('dotenv');

const ProductRoute = require('./routes/productRoute');
const UserRoute = require('./routes/userRoute');

dotenv.config(); // Load environment variables from .env file

app.use(express.json()); //middleware to parse JSON request bodies


app.use('/products', ProductRoute); //use the product route for all requests starting with /products
app.use('/users', UserRoute);

const connectDB = require('./Config/databaseConfig');
connectDB(); // Connect to MongoDB

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ${process.env.PORT}');
});