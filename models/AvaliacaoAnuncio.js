// Importa a biblioteca mongoose para interagir com o MongoDB
const mongoose = require('mongoose');

// Define o esquema (schema) para os dados que serão armazenados no MongoDB
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

// Cria um modelo (model) chamado 'AvaliacaoAnuncio' baseado no esquema definido anteriormente
const AvaliacaoAnuncio = mongoose.model('AvaliacaoAnuncio', avaliacaoAnuncioSchema);

// Exporta o modelo 'AvaliacaoAnuncio' para ser utilizado em outros arquivos
module.exports = AvaliacaoAnuncio;

// Importa o modelo 'AvaliacaoAnuncio' definido anteriormente
const AvaliacaoAnuncio = require('models/AvaliacaoAnuncio.js');

// Função assíncrona para criar uma nova avaliação de anúncio no banco de dados
async function criarAvaliacaoAnuncio(AvaliacaoAnuncioData) {
  const novaAvaliacaoAnuncio = new AvaliacaoAnuncio(AvaliacaoAnuncioData);
  await novaAvaliacaoAnuncio.save(); // Salva a nova avaliação de anúncio no banco de dados
  return novaAvaliacaoAnuncio; // Retorna a avaliação de anúncio recém-criada
}

// Função assíncrona para excluir uma avaliação de anúncio do banco de dados com base no ID
async function excluirAvaliacaoAnuncio(id) {
  const resultado = await AvaliacaoAnuncio.findByIdAndRemove(id); // Procura e remove a avaliação de anúncio pelo ID
  return resultado; // Retorna o resultado da operação de remoção
}

// Função assíncrona para buscar uma avaliação de anúncio no banco de dados com base no ID
async function buscarAvaliacaoAnuncio(id) {
  const avaliacaoAnuncioEncontrada = await AvaliacaoAnuncio.findById(id); // Procura uma avaliação de anúncio pelo ID
  return avaliacaoAnuncioEncontrada; // Retorna a avaliação de anúncio encontrada
}

// Exporta as funções de manipulação do banco de dados para serem utilizadas em outros arquivos
module.exports = {
  criarAvaliacaoAnuncio,
  excluirAvaliacaoAnuncio,
  buscarAvaliacaoAnuncio
};