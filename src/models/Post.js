const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  description: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

module.exports = mongoose.model('Post', PostSchema)