const { Sequelize } = require('sequelize');
const db = new Sequelize(`${process.env.DATABASE}`)

module.exports = db