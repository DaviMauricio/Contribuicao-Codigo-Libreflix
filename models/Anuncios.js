const mongoose = require('mongoose');

// Esquema para Anúncios
const anunciosSchema = new mongoose.Schema({
  // propriedades dos anúncios
});

const Anuncios = mongoose.model('Anuncios', anunciosSchema);

module.exports = {
  Anuncios
};




// Node.js/moongose ou java (teoricamente vcs do libreflix iriam apropriar o java para moongose).

//daos





//mediators