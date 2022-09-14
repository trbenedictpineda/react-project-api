require('dotenv').config();
const express = require("express");
const cors = require("cors")
const db = require('./config/database');

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use("/note", require("./routes/routes"))

app.listen(PORT, console.log(`Server started on port ${PORT}`))