const {db} = require('../util/database')
const {Sequelize, DataTypes} = require("sequelize")

const Product = db.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  price: DataTypes.FLOAT,
})

module.exports = {Product}