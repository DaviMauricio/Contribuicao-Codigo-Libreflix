const mongoose = require('mongoose');

// Esquema para Avaliação de Anúncios
const avaliacaoAnuncioSchema = new mongoose.Schema({
    // propriedades da avaliação de anúncios
  });
  
const AvaliacaoAnuncio = mongoose.model('AvaliacaoAnuncio', avaliacaoAnuncioSchema);

module.exports = {
  AvaliacaoAnuncio
};

// Node.js/moongose ou java (teoricamente vcs do libreflix iriam apropriar o java para moongose).

//daos





//mediators