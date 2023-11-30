const mongoose = require('mongoose');

const anunciadorSchema = new mongoose.Schema({
    nomeIniciativa: {
        type: String,
        required: true
    },
    descricaoIniciativa: {
        type: String,
        required: true
    },
    cep: {
        type: Number,
        required: true
    }
    });

const Anunciador = mongoose.model('Anunciador', anunciadorSchema);

module.exports = Anunciador;


const Anunciador = require('models/Anunciador.js');

async function criarAnunciador(AnunciadorData) {
  const Anunciador = new Anunciador(AnunciadorData);
  await Anunciador.save();
  return Anunciador;
};

async function excluirAnunciador(id) {
  const result = await Anunciador.findByIdAndRemove(id);
  return result;
};


async function buscarAnunciador(id) {
  const Anunciador = await Anunciador.findById(id);
  return Anunciador;
};

module.exports = {
  criarAnunciador,
  excluirAnunciador,
  buscarAnunciador
};

