// Importa a biblioteca mongoose para interagir com o MongoDB
const mongoose = require('mongoose');

// Define o esquema (schema) para os dados que serão armazenados no MongoDB
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

// Cria um modelo (model) chamado 'Anunciador' baseado no esquema definido anteriormente
const Anunciador = mongoose.model('Anunciador', anunciadorSchema);

// Exporta o modelo 'Anunciador' para ser utilizado em outros arquivos
module.exports = Anunciador;

// Importa o modelo 'Anunciador' definido anteriormente
const Anunciador = require('models/Anunciador.js');

// Função assíncrona para criar um novo anunciador no banco de dados
async function criarAnunciador(AnunciadorData) {
  const novoAnunciador = new Anunciador(AnunciadorData);
  await novoAnunciador.save(); // Salva o novo anunciador no banco de dados
  return novoAnunciador; // Retorna o anunciador recém-criado
}

// Função assíncrona para excluir um anunciador do banco de dados com base no ID
async function excluirAnunciador(id) {
  const resultado = await Anunciador.findByIdAndRemove(id); // Procura e remove o anunciador pelo ID
  return resultado; // Retorna o resultado da operação de remoção
}

// Função assíncrona para buscar um anunciador no banco de dados com base no ID
async function buscarAnunciador(id) {
  const anunciadorEncontrado = await Anunciador.findById(id); // Procura um anunciador pelo ID
  return anunciadorEncontrado; // Retorna o anunciador encontrado
}

// Exporta as funções de manipulação do banco de dados para serem utilizadas em outros arquivos
module.exports = {
  criarAnunciador,
  excluirAnunciador,
  buscarAnunciador
};