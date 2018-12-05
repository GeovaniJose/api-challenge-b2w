const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o app
const app = express()
app.use(express.json())
app.use(cors())

// Iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/challenge-b2w-db',
  { useNewUrlParser: true }
)
requireDir('./src/models')

// Rotas
app.use('/v1', require('./src/routes'))

app.listen(process.env.PORT || 3001, () => console.log('Servidor ouvindo...'))
