const Comment = require('../models/Comment')

module.exports = {
  async store(request, response) {
    try {
      const { text } = request.body
      const { post } = request.params
      const { user_id } = request

      const comment = await Comment.create({ text, post, user: user_id })

      return response.status(201).json({ comment })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  },
}
