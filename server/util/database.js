const {Sequelize} = require('sequelize')
require("dotenv").config();
const {DATABASE_URL} = process.env


const db = new Sequelize(
  DATABASE_URL,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

async function testConnection() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection()

module.exports={db}