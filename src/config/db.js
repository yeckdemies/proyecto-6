const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('BD conectada con éxito');
  } catch (error) {
    console.log('Error al conectar a la BD: ', error);
  }
};

/* otra forma de conectar la base de datos
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('BD conectada con éxito'))
  .catch((error) => console.log('Error al conectar a la BD: ', error));
*/

module.exports = { connectDB };
