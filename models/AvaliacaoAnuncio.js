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

const AvaliacaoAnuncio = require('models/AvaliacaoAnuncio.js');

async function criarAvaliacaoAnuncio(AvaliacaoAnuncioData) {
  const AvaliacaoAnuncio = new AvaliacaoAnuncio(AvaliacaoAnuncioData);
  await AvaliacaoAnuncio.save();
  return AvaliacaoAnuncio;
};

async function excluirAvaliacaoAnuncio(id) {
  const result = await AvaliacaoAnuncio.findByIdAndRemove(id);
  return result;
};


async function buscarAvaliacaoAnuncio(id) {
  const AvaliacaoAnuncio = await AvaliacaoAnuncio.findById(id);
  return AvaliacaoAnuncio;
};

module.exports = {
  criarAvaliacaoAnuncio,
  excluirAvaliacaoAnuncio,
  buscarAvaliacaoAnuncio
};
