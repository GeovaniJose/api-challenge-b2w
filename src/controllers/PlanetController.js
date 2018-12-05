const mongoose = require('mongoose')

const api = require('../services/api')

const Planet = mongoose.model('Planet')

module.exports = {
  async add (req, res) {
    try {
      const arrayPlanet = await api.get(`/planets/?search=${req.body.name}`)

      if (arrayPlanet.data.results === null) {
        return res.status(400).send('There was an error adding the planets.')
      }

      const arrayFilms = arrayPlanet.data.results[0]

      const films = arrayFilms.films.length

      req.body = { films, ...req.body }

      const planet = await Planet.create(req.body)

      return res.status(201).json(planet)
    } catch (err) {
      return res.status(400).send('There was an error adding the planets.')
    }
  },

  async list (req, res) {
    try {
      const { page = 1 } = req.query

      const planets = await Planet.paginate({}, { page, limit: 10 })

      return res.status(200).json(planets)
    } catch (err) {
      return res.status(400).send('There was an error retrieving the planets.')
    }
  },

  async readByName (req, res) {
    try {
      const planet = await Planet.find({ name: req.params.name })

      return res.status(200).json(planet)
    } catch (err) {
      return res.status(400).send('There was an error retrieving the planet by name.')
    }
  },

  async readById (req, res) {
    try {
      const planet = await Planet.findById(req.params.id)

      return res.status(200).json(planet)
    } catch (err) {
      return res.status(400).send('There was an error retrieving the planet by id.')
    }
  },

  async destroy (req, res) {
    try {
      await Planet.findByIdAndRemove(req.params.id)

      return res.status(200).send('Planet successfully removed')
    } catch (err) {
      return res.status(400).send('There was an error removing the planet.')
    }
  }
}
