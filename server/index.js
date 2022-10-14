const express = require('express')
const cors = require('cors')
const server = express()
const PORT = process.env.PORT || 4000
const {db} = require('./util/database')
// const User = require('./models/user')
// const Product = require('./models/product')
const {User, Product} = require('./util/models')
const { where } = require('sequelize')

//! Middleware
server.use(express.json())
server.use(cors())


//! endpoints
server.post('/newUser', async (req, res) => {
  User
    .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    .then((dbRes) => {
      res.status(200).send(dbRes)
    })

})

server.post('/newProduct', async (req, res) => {
  Product
    .create({
      title: req.body.title,
      price: req.body.price,
      userId: req.body.userId
    })
    .then((dbRes) => {
      res.status(200).send(dbRes)
    })
})

server.get('/users/:id', async (req,res) => {
  Product
    .findAll({where: {userId: req.params.id}})
    .then((dbRes) => {
      res.status(200).send(dbRes)
    })
})

// db.sync({force: true})
db.sync()
server.listen(PORT, () => console.log(`Running on Port ${PORT}`))