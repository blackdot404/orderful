const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

// execução da conexão com MONGODB
const conn = require('./database/connection');
conn();

// Configuração do body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app irá utilizar o router
app.use(router);

module.exports = app;
