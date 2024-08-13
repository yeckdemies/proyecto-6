const Autor = require('../models/autores.model');

const getAutores = async (req, res, next) => {
  try {
    const autores = await Autor.find();
    return res.status(200).json(autores);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getAutoresById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const autor = await Autor.findById(id);
    return res.status(200).json(autor);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getAutoresByNombre = async (req, res, next) => {
  try {
    const { nombre } = req.params;
    const autores = await Autor.find({
      nombre: new RegExp(nombre, 'i') // 'i' es el flag para insensibilidad a mayúsculas y minúsculas
    });
    return res.status(200).json(autores);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getAutoresByNacionalidad = async (req, res, next) => {
  try {
    const { nacionalidad } = req.params;
    const autores = await Autor.find({
      nacionalidad: new RegExp(nacionalidad, 'i') // 'i' es el flag para insensibilidad a mayúsculas y minúsculas
    });
    return res.status(200).json(autores);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const postAutores = async (req, res, next) => {
  try {
    const newAutor = new Autor(req.body);
    const autorSaved = await newAutor.save();
    return res.status(201).json(autorSaved);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const putAutores = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newAutor = await Autor(req.body);
    newAutor._id = id;
    const autorUpdated = await Autor.findByIdAndUpdate(id, newAutor, {
      new: true
    });
    return res.status(200).json(autorUpdated);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const deleteAutores = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juegoDeleted = await Autor.findByIdAndDelete(id);
    return res.status(204).json(juegoDeleted);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAutores,
  getAutoresById,
  getAutoresByNombre,
  getAutoresByNacionalidad,
  postAutores,
  putAutores,
  deleteAutores
};
