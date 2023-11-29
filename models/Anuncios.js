const mongoose = require('mongoose');

const anunciosSchema = new mongoose.Schema({
  video: {
    type: Buffer,
    required: true
  },
  designinmg: {
    type: Buffer,
    required: true
  },
  anunciador: {
    type: String,
    required: true
  },
  descricaoDoAnuncio: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Anuncios = mongoose.model('Anuncios', anunciosSchema);

module.exports = Anuncios;

// Node.js/moongose ou java (teoricamente vcs do libreflix iriam apropriar o java para moongose).

//daos





//mediators