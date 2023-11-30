// Importa a biblioteca mongoose para interagir com o MongoDB
const mongoose = require('mongoose');

// Define o esquema (schema) para os dados que serão armazenados no MongoDB
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

// Cria um modelo (model) chamado 'Doador' baseado no esquema definido anteriormente
const Doador = mongoose.model('Doador', doadorSchema);

// Exporta o modelo 'Doador' para ser utilizado em outros arquivos
module.exports = Doador;

// Importa o modelo 'Doador' definido anteriormente
const Doador = require('models/Doador.js');

// Função assíncrona para criar um novo doador no banco de dados
async function criarDoador(DoadorData) {
  const novoDoador = new Doador(DoadorData);
  await novoDoador.save(); // Salva o novo doador no banco de dados
  return novoDoador; // Retorna o doador recém-criado
}

// Exporta a função de criação de doador para ser utilizada em outros arquivos
module.exports = {
  criarDoador
};