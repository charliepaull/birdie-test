const express = require("express");
const connection = require("./connection");

const app = express();

// query
const TABLE_ALL = "SELECT * FROM census_learn_sql";

// backend PORT server
const PORT = process.env.PORT || 8080;

// this is middleware - using express because I don't know Sagas or Epic
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// will have to put PORT here for AWS deployment


// this is a route to check if the JSON shows up on localhost 8000

// root page - just making sure route is hit
app.get("/", (req, res) => {
    res.send("Hello poop!");
})

// get route, will format this as a JSON
app.get("/json", (req, res) => {
    // connecting to SQL db & querying for all data in the table
    connection.query(TABLE_ALL, (err, data) => {
        if (err) {
            return res.status(500).end()
        } else {
            res.json({
                census: data
            })
        }
    })
})

// Start API server
app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT);
});