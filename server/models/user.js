const {db} = require('../util/database')
const {Sequelize, DataTypes} = require("sequelize")

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
})

module.exports = {User}