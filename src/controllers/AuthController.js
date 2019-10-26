const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth_config = require('../config/auth')

module.exports = {

  async register(request, response) {

    try {
      
      const { name, email, password } = request.body

      if (await User.findOne({ email })) return response.status(400).json({ error: `user already exists` })

      const user = await User.create({ name, email, password })

      user.password = undefined
      return response.status(201).json({ user })
    } catch (error) {
      
      return response.status(500).json({ error: `woops` })
    }
  },

  async auth(request, response) {

    try {
      
      const { email, password } = request.body

      const user = await User.findOne({ email }).select('+password')

      if (!user) return response.status(400).json({ error: `user doesn't exists` })

      if (!await bcrypt.compare(password, user.password)) return response.status(400).json({ error: `invalid password` })

      user.password = undefined

      const token = jwt.sign({ id: user._id }, auth_config.secret, { expiresIn: 43200 })

      response.status(200).json({ user, token })
    } catch (error) {
      
      response.status(500).json({ error: `woops` })
    }
  }
}