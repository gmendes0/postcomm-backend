const express = require('express')

const route = express.Router()

const AuthController = require('./controllers/AuthController')
const UserController = require('./controllers/UserContoller')
const PostController = require('./controllers/PostController')

const Authenticate = require('./middlewares/Authenticate')

route.post('/register', AuthController.register)
route.post('/login', AuthController.auth)

route.get('/users', Authenticate, UserController.show)

route.get('/posts', Authenticate, PostController.index)
route.post('/posts', Authenticate, PostController.store)

module.exports = route
