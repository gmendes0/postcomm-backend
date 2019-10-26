const User = require('../models/User')

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
  }
}