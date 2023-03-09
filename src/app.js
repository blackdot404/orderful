const express = require('express');
const router = require('./router');

const app = express();

// importação e execução da conexão com MONGODB
const conn = require('./database/connection');
conn();

// app irá utilizar o router
app.use(router);

module.exports = app;
