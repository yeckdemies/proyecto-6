require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const { connectDB } = require('./src/config/db');
const librosRouter = require('./src/api/routes/libros.route');
const autoresRouter = require('./src/api/routes/autores.route');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/libros', librosRouter);
app.use('/api/v1/autores', autoresRouter);

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
