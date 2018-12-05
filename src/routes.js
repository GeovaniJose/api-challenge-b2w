const express = require('express')
const routes = express.Router()

const PlanetController = require('./controllers/PlanetController')

routes.post('/planets', PlanetController.add)
routes.get('/planets', PlanetController.list)
routes.get('/planets/name/:name', PlanetController.readByName)
routes.get('/planets/:id', PlanetController.readById)
routes.delete('/planets/:id', PlanetController.destroy)

module.exports = routes
