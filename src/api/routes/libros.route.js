const {
  getLibros,
  getLibrosById,
  getLibrosByTitulo,
  getLibrosByGenero,
  getLibrosByAutor,
  postLibros,
  putLibros,
  deleteLibros
} = require('../controllers/libros.controller');

const librosRouter = require('express').Router();

librosRouter.get('/titulo/:titulo', getLibrosByTitulo);
librosRouter.get('/genero/:genero', getLibrosByGenero);
librosRouter.get('/autor/:autor', getLibrosByAutor);
librosRouter.get('/:id', getLibrosById);
librosRouter.get('/', getLibros);
librosRouter.post('/', postLibros);
librosRouter.put('/:id', putLibros);
librosRouter.delete('/:id', deleteLibros);

module.exports = librosRouter;
