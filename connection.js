const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "test-read",
    password: "xnxPp6QfZbCYkY8",
    database: "census_learn_sql"
})

connection.connect((err) => {
    if (err) {
        console.log("error connecting " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
})

module.exports = connection;