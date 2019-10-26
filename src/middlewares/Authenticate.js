const jwt = require('jsonwebtoken')
const auth_config = require('../config/auth')

module.exports = (request, response, next) => {

  try {

    const { authorization } = request.headers

    if (!authorization) return response.status(401).json({ error: `token don't exists` })
  
    const parts = authorization.split(' ')
  
    if (parts.length !== 2) return response.status(401).json({ error: `expected token format` })
  
    const [schema, token] = parts
  
    if (!/^Bearer$/i.test(schema)) return response.status(401).json({ error: `invalid token format` })
  
    jwt.verify(token, auth_config.secret, (error, decoded) => {

      if (error) return response.status(401).json({ error: `invalid token` })

      request.user_id = decoded.id
    })
  } catch (error) {

    return response.status(401).json({ error: `woops` })
  }

  next()
}