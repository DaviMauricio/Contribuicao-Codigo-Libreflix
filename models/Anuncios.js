// Importa a biblioteca mongoose para interagir com o MongoDB
const mongoose = require('mongoose');

// Define o esquema (schema) para os dados que serão armazenados no MongoDB
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

// Cria um modelo (model) chamado 'Anuncios' baseado no esquema definido anteriormente
const Anuncios = mongoose.model('Anuncios', anunciosSchema);

// Exporta o modelo 'Anuncios' para ser utilizado em outros arquivos
module.exports = Anuncios;

// Importa o modelo 'Anuncios' definido anteriormente
const Anuncios = require('models/Anuncios.js');

// Função assíncrona para criar um novo anúncio no banco de dados
async function criarAnuncios(AnunciosData) {
  const novoAnuncio = new Anuncios(AnunciosData);
  await novoAnuncio.save(); // Salva o novo anúncio no banco de dados
  return novoAnuncio; // Retorna o anúncio recém-criado
}

// Função assíncrona para excluir um anúncio do banco de dados com base no ID
async function excluirAnuncios(id) {
  const resultado = await Anuncios.findByIdAndRemove(id); // Procura e remove o anúncio pelo ID
  return resultado; // Retorna o resultado da operação de remoção
}

// Função assíncrona para alterar um anúncio no banco de dados com base no ID
async function alterarAnuncios(id, AnunciosData) {
  const anuncioAlterado = await Anuncios.findByIdAndUpdate(id, AnunciosData, { new: true });
  return anuncioAlterado; // Retorna o anúncio alterado
}

// Função assíncrona para buscar um anúncio no banco de dados com base no ID
async function buscarAnuncios(id) {
  const anuncioEncontrado = await Anuncios.findById(id); // Procura um anúncio pelo ID
  return anuncioEncontrado; // Retorna o anúncio encontrado
}

// Exporta as funções de manipulação do banco de dados para serem utilizadas em outros arquivos
module.exports = {
  criarAnuncios,
  excluirAnuncios,
  alterarAnuncios,
  buscarAnuncios
};





