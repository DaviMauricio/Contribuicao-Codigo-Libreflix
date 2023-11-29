const mongoose = require('mongoose');

const gestorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  funcao: {
    type: String,
    required: true
  },
  cpf: {
    type: Number,
    required: true
  },
  senha: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Gestor = mongoose.model('Gestor', gestorSchema);

module.exports = Gestor;

// Node.js/moongose ou java (teoricamente vcs do libreflix iriam apropriar o java para moongose).

//daos





//mediators