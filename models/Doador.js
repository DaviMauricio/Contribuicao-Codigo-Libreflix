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

const Doador = require('models/Doador.js');

async function criarDoador(DoadorData) {
  const Doador = new Doador(DoadorData);
  await Doador.save();
  return Doador;
};


module.exports = {
  criarDoador
};



