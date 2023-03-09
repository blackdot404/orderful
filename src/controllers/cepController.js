const { consultarCep } = require('correios-brasil');

const consultar = (req, res) => {
    //GET consulta cep
    let cepRecebido = req.params.cep;

    if (!cepRecebido) {
        return res.status(400).send({
            statusCode: 400,
            message: 'CEP não informado',
        });
    }

    consultarCep(cepRecebido).then((response) => {
        res.status(200).send(response);
    });
};

module.exports = { consultar };
