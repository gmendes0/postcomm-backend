const Comment = require('../models/Comment')

module.exports = {
  async index(request, response) {
    try {
      const { post } = request.params

      const comments = await Comment.find({ post }).populate('user')

      return response.status(200).json({ comments })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  },
}
