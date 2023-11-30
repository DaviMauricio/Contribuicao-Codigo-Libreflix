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

const Anuncios = require('models/Anuncios.js');

async function criarAnuncios(AnunciosData) {
  const Anuncios = new Anuncios(AnunciosData);
  await Anuncios.save();
  return Anuncios;
};

async function excluirAnuncios(id) {
  const result = await Anuncios.findByIdAndRemove(id);
  return result;
};

async function alterarAnuncios(id, AnunciosData) {
  const Anuncios = await Anuncios.findByIdAndUpdate(id, AnunciosData, { new: true });
  return Anuncios;
};

async function buscarAnuncios(id) {
  const Anuncios = await Anuncios.findById(id);
  return Anuncios;
};

module.exports = {
  criarAnuncios,
  excluirAnuncios,
  alterarAnuncios,
  buscarAnuncios
};







