const { Sequelize } = require('sequelize');

// Sample DB connection string
// mysql://username:password@localhost:3306/dbname
const db = new Sequelize(`${process.env.DATABASE}`)

module.exports = db