// index.js
const express = require('express');
const app = express();
const port = 8084;
const cors = require('cors');
const bodyParser=require('body-parser')
app.use(bodyParser.json()); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ extended: true}));
const userRoute = require('./routes/userRoutes.js');
const { pool } = require('./database');


app.options("*", cors()); // Enable pre-flight requests for all routes
app.use(cors({ origin: true, credentials: true }));
app.use("/", userRoute);


// app.use(express.json({ limit: "1000mb" }));
// app.use(express.urlencoded({ extended: true, limit: "1000mb" }));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

