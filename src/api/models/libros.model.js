const mongoose = require('mongoose');

const librosSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    fechaPublicacion: { type: Date, required: true },
    genero: {
      type: String,
      required: true,
      enum: [
        'Ficción',
        'Thriller',
        'Distopía',
        'Autobiografía',
        'Cuentos Infantiles',
        'Novela negra',
        'Novela',
        'Ensayo',
        'Biografía',
        'Poesía',
        'Teatro',
        'Ciencia Ficción',
        'Cuentos'
      ]
    },
    autores: [{ type: mongoose.Types.ObjectId, ref: 'autores' }]
  },
  { timestamps: true, collection: 'libros' }
);

const Libro = mongoose.model('libros', librosSchema, 'libros');

module.exports = Libro;
