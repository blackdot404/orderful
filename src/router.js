const express = require('express');
const rastrearController = require('./controllers/rastrearController');
const cepController = require('./controllers/cepController');
const newUserController = require('./controllers/newUserController');
const authController = require('./controllers/authController');

const router = express.Router();

//Get routes
router.get('/rastrear/:codigo', rastrearController.rastrear);
router.get('/consultarcep/:cep', cepController.consultar);

//Post routes
router.post('/signup', newUserController.signup);
router.post('/login', authController.login);
router.post('/auth', authController.verifyToken, cepController.consultar);

module.exports = router;
