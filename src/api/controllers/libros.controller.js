const Libro = require('../models/libros.model');

const getLibros = async (req, res, next) => {
  try {
    const libros = await Libro.find().populate('autores');
    return res.status(200).json(libros);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getLibrosById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findById(id);
    return res.status(200).json(libro);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getLibrosByTitulo = async (req, res, next) => {
  try {
    const { titulo } = req.params;
    const libros = await Libro.find({
      titulo: new RegExp(titulo, 'i') // 'i' es el flag para insensibilidad a mayúsculas y minúsculas
    });
    return res.status(200).json(libros);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getLibrosByGenero = async (req, res, next) => {
  try {
    const { genero } = req.params;
    const libros = await Libro.find({
      genero: new RegExp(genero, 'i') // 'i' es el flag para insensibilidad a mayúsculas y minúsculas
    });
    return res.status(200).json(libros);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getLibrosByAutor = async (req, res, next) => {
  try {
    const { autor } = req.params;
    const libros = await Libro.find({
      autores: new RegExp(autor, 'i') // 'i' es el flag para insensibilidad a mayúsculas y minúsculas
    });
    return res.status(200).json(libros);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const postLibros = async (req, res, next) => {
  try {
    const newLibro = new Libro(req.body);
    const libroSaved = await newLibro.save();
    return res.status(201).json(libroSaved);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const putLibros = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldLibro = await Libro.findById(id);
    const newLibro = new Libro(req.body);
    newLibro._id = id;
    if (req.body.hasOwnProperty('autores')) {
      newLibro.autores = [...oldLibro.autores, ...req.body.autores];
    } else newLibro.autores = [...oldLibro.autores];
    const libroUpdated = await Libro.findByIdAndUpdate(id, newLibro, {
      new: true
    });
    return res.status(200).json(libroUpdated);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const deleteLibros = async (req, res, next) => {
  try {
    const { id } = req.params;
    const libroDeleted = await Libro.findByIdAndDelete(id);
    return res.status(204).json(libroDeleted);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getLibros,
  getLibrosById,
  getLibrosByTitulo,
  getLibrosByGenero,
  getLibrosByAutor,
  postLibros,
  putLibros,
  deleteLibros
};
