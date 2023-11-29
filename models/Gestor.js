const mongoose = require('mongoose');

// Esquema para Gestor
const gestorSchema = new mongoose.Schema({
  // propriedades do gestor
});

const Gestor = mongoose.model('Gestor', gestorSchema);

module.exports = {
  Gestor
};

// Node.js/moongose ou java (teoricamente vcs do libreflix iriam apropriar o java para moongose).

//daos





//mediators