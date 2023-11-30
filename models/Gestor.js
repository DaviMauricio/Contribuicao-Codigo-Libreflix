// Importa a biblioteca mongoose para interagir com o MongoDB
const mongoose = require('mongoose');

// Define o esquema para o modelo "Gestor"
const gestorSchema = new mongoose.Schema({
  // Nome do gestor, do tipo String e obrigatório
  nome: {
    type: String,
    required: true
  },
  // Função do gestor, do tipo String e obrigatório
  funcao: {
    type: String,
    required: true
  },
  // CPF do gestor, do tipo Number e obrigatório
  cpf: {
    type: Number,
    required: true
  },
  // Senha do gestor, do tipo Number e obrigatório
  senha: {
    type: Number,
    required: true
  },
  // Email do gestor, do tipo String e obrigatório
  email: {
    type: String,
    required: true
  }
});

// Converte o esquema em um modelo chamado "Gestor"
const Gestor = mongoose.model('Gestor', gestorSchema);

// Exporta o modelo para ser utilizado em outros arquivos
module.exports = Gestor;


// Importa o modelo "Gestor" definido anteriormente
const Gestor = require('models/Gestor.js'); 

// Função para criar um novo gestor
async function criarGestor(gestorData) {
  // Cria uma instância do modelo "Gestor" com os dados fornecidos
  const gestor = new Gestor(gestorData);
  
  // Salva a instância no banco de dados MongoDB
  await gestor.save();
  
  // Retorna o gestor recém-criado
  return gestor;
};

// Função para excluir um gestor por ID
async function excluirGestor(id) {
  // Encontra e remove o gestor pelo ID
  const result = await Gestor.findByIdAndRemove(id);
  
  // Retorna o resultado da operação de remoção
  return result;
};

// Função para alterar os dados de um gestor por ID
async function alterarGestor(id, gestorData) {
  // Encontra e atualiza o gestor pelo ID com os novos dados, { new: true } retorna o documento atualizado
  const gestor = await Gestor.findByIdAndUpdate(id, gestorData, { new: true });
  
  // Retorna o gestor atualizado
  return gestor;
};

// Função para buscar um gestor por ID
async function buscarGestor(id) {
  // Encontra o gestor pelo ID
  const gestor = await Gestor.findById(id);
  
  // Retorna o gestor encontrado
  return gestor;
};

// Exporta as funções para serem utilizadas em outros arquivos
module.exports = {
  criarGestor,
  excluirGestor,
  alterarGestor,
  buscarGestor
};

