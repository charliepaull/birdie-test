const express = require("express");

const app = express();

// backend PORT server
const PORT = process.env.PORT || 8000;

// this is middleware - using express because I don't know Sagas or Epic
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// will have to put PORT here for AWS deployment

// Start API server
app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT);
});