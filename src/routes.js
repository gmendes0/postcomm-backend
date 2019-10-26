const express = require('express')

const route = express.Router()

const AuthController = require('./controllers/AuthController')

route.post('/register', AuthController.register)
route.post('/login', AuthController.auth)

module.exports = route
