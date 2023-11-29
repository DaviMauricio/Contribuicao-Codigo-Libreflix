const mongoose = require('mongoose');

const doadorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  }
});

const Doador = mongoose.model('Doador', doadorSchema);

module.exports = Doador;

// Node.js/moongose ou java (teoricamente vcs do libreflix iriam apropriar o java para moongose).

//daos





//mediators