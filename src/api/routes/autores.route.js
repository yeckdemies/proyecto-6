const {
  getAutores,
  getAutoresById,
  getAutoresByNombre,
  getAutoresByNacionalidad,
  postAutores,
  putAutores,
  deleteAutores
} = require('../controllers/autores.controller');

const autoresRouter = require('express').Router();

autoresRouter.get('/nombre/:nombre', getAutoresByNombre);
autoresRouter.get('/nacionalidad/:nacionalidad', getAutoresByNacionalidad);
autoresRouter.get('/:id', getAutoresById);
autoresRouter.get('/', getAutores);
autoresRouter.post('/', postAutores);
autoresRouter.put('/:id', putAutores);
autoresRouter.delete('/:id', deleteAutores);

module.exports = autoresRouter;
