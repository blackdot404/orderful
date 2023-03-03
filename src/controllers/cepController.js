const { consultarCep } = require('correios-brasil');

const consultar = (req, res) => {
    //GET consulta cep
    let cepRecebido = req.params.cep;

    consultarCep(cepRecebido).then((response) => {
        res.status(200).send(response);
    });
};

module.exports = { consultar };
