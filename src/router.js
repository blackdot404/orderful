const express = require('express');
const consultaController = require('./controllers/consultaController');
const newUserController = require('./controllers/newUserController');
const authController = require('./controllers/authController');

const router = express.Router();

//Get routes
router.get('/rastrear', consultaController.rastrear);
router.get('/cep', consultaController.cep);

//Post routes
router.post('/signup', newUserController.signup);
router.post('/login', authController.login);
router.post('/auth', authController.verifyToken, consultaController.signin);

module.exports = router;
