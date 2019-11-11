const Post = require('../models/Post')

module.exports = {
  async index(request, response) {
    try {
      const posts = await Post.find().populate('user')

      return response.status(200).json({ posts })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  },
  async store(request, response) {
    try {
      const { description } = request.body
      const { user_id } = request
  
      const post = await Post.create({ description, user: user_id })

      return response.status(201).json({ post })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  },
}