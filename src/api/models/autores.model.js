const mongoose = require('mongoose');

const autoresSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    nacionalidad: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true }
  },
  { timestamps: true, collection: 'autores' }
);

const Autor = mongoose.model('autores', autoresSchema, 'autores');

module.exports = Autor;
