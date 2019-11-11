const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const database = require('./config/database')

const app = express()

mongoose.connect(database.connection.cloud, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(cors())
app.use(routes)
app.listen(3333)
