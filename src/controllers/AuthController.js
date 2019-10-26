const User = require('../models/User')

module.exports = {
  async register(request, response) {
    try {
      return response.json({ message: "ok" })
    } catch (error) {
      
    }
  }
}