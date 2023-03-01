const express = require('express');
const router = require('./router');

const app = express();

// app irá utilizar o router
app.use(router);

module.exports = app;
