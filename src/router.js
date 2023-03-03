const express = require('express');
const rastrearController = require('./controllers/rastrearController');
const cepController = require('./controllers/cepController');

const router = express.Router();

router.get('/rastrear/:codigo', rastrearController.rastrear);
router.get('/consultarcep/:cep', cepController.consultar);

module.exports = router;
