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

//daos e mediators juntos?

const Gestor = require('models/Gestor.js'); // Substitua pelo caminho correto para o seu arquivo de modelo

async function criarGestor(gestorData) {
  const gestor = new Gestor(gestorData);
  await gestor.save();
  return gestor;
};

async function excluirGestor(id) {
  const result = await Gestor.findByIdAndRemove(id);
  return result;
};

async function alterarGestor(id, gestorData) {
  const gestor = await Gestor.findByIdAndUpdate(id, gestorData, { new: true });
  return gestor;
};

async function buscarGestor(id) {
  const gestor = await Gestor.findById(id);
  return gestor;
};

module.exports = {
  criarGestor,
  excluirGestor,
  alterarGestor,
  buscarGestor
};





