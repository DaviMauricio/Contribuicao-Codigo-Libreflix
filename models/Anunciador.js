const mongoose = require('mongoose');


// Esquema para Anunciador
const anunciadorSchema = new mongoose.Schema({
    // propriedades do anunciador
  });
  
const Anunciador = mongoose.model('Anunciador', anunciadorSchema);

module.exports = {
  Anunciador
};

// Node.js/moongose ou java (teoricamente vcs do libreflix iriam apropriar o java para moongose).

//daos





//mediators