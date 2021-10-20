const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()
const router = require('./routes/index')

const PORT = process.env.PORT || 5000

const app = express()
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50
})

app.use(limiter)
app.set('trust proxy', 1)

app.use(express.static('public'))

app.use(cors())

app.use(router)

app.listen(PORT, () => console.log('ooooooo'))