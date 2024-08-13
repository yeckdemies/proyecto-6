const mongoose = require('mongoose');
const autores = require('../data/autores');
const libros = require('../data/libros');
const Autor = require('../../api/models/autores.model');
const Libro = require('../../api/models/libros.model');

mongoose
  .connect(
    'mongodb+srv://yolanda:fAEeKmY7U0eKbQz3@cluster0.a9d0gcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    await Autor.insertMany(autores);
    const autoresDocs = await Autor.find();
    const librosConIds = libros.map((libro) => {
      const autoresIds = libro.autores
        .map((nombreAutor) => {
          const autor = autoresDocs.find(
            (autor) => autor.nombre === nombreAutor
          );
          return autor ? autor._id : null;
        })
        .filter((id) => id !== null);

      return {
        ...libro,
        autores: autoresIds
      };
    });

    await Libro.insertMany(librosConIds);
  })
  .then(() => mongoose.connection.close())
  .catch((error) => {
    console.error('Error insertando datos:', error);
    mongoose.connection.close();
  });
