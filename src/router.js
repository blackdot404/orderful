const express = require('express');
const { consultarCep, rastrearEncomendas } = require('correios-brasil');

const router = express.Router();

//GET consulta cep
router.get('/consulta/cep/:cep', (req, res) => {
    let cepRecebido = req.params.cep;

    consultarCep(cepRecebido).then((response) => {
        res.status(200).send(response);
    });
});

//GET rastrear encomenda
router.get('/consulta/rastrear/:codigo', (req, res) => {
    let codEncomenda = [req.params.codigo];

    rastrearEncomendas(codEncomenda).then((response) => {
        res.status(200).send(response);
    });
});

module.exports = router;
