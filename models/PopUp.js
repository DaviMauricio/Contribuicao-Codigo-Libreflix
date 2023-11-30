// Importa a biblioteca mongoose para interagir com o MongoDB
const mongoose = require('mongoose');

// Define o esquema (schema) para os dados que serão armazenados no MongoDB
const popUpSchema = new mongoose.Schema({
    totalArrecadado: {
        type: Number,
        required: true
    },
    meta: {
        type: Number,
        required: true
    }
});

// Cria um modelo (model) chamado 'PopUp' baseado no esquema definido anteriormente
const PopUp = mongoose.model('PopUp', popUpSchema);

// Exporta o modelo 'PopUp' para ser utilizado em outros arquivos
module.exports = PopUp;