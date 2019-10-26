const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
})

UserSchema.pre('save', async function(next) {

  const hasedPassword = await bcrypt.hash(this.password, 10)
  this.password = hasedPassword

  next()
})

module.exports = mongoose.model('User', UserSchema)
