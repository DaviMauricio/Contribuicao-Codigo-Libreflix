const mongoose = require('mongoose');

const avaliacaoAnuncioSchema = new mongoose.Schema({
  denunciar: {
    type: String,
    required: true
  },
  restricao: {
    type: String,
    required: true
  }
});

const AvaliacaoAnuncio = mongoose.model('AvaliacaoAnuncio', avaliacaoAnuncioSchema);

module.exports = AvaliacaoAnuncio;

// Node.js/moongose ou java (teoricamente vcs do libreflix iriam apropriar o java para moongose).

//daos





//mediators
//