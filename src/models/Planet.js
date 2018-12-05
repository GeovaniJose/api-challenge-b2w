const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const PlanetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  climate: {
    type: String,
    required: true
  },
  terrain: {
    type: String,
    required: true
  },
  films: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

PlanetSchema.plugin(mongoosePaginate)

mongoose.model('Planet', PlanetSchema)
