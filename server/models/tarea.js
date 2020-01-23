
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tareaSchema = new Schema({
  titulo: {
    type: String,
    Required: 'El campo titulo es obligatorio.'
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: String,
    Required:'El select titulo es obligatorio.'
   
  },
  description: {
    type: String
   
  }
});

module.exports = mongoose.model('Tarea', tareaSchema);
