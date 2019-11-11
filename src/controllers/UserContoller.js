const User = require('../models/User')

module.exports = {
  async show(request, response) {
    try {
      const { user_id } = request

      const user = await User.findById(user_id)

      return response.status(200).json({ user })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  },
}