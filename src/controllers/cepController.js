const { consultarCep } = require('correios-brasil');

const consultar = (req, res) => {
    //GET consulta cep
    let cepRecebido = req.params.cep;

    if (!cepRecebido) {
        return res.status(400).json({
            statusCode: 400,
            message: 'CEP não informado',
        });
    }

    consultarCep(cepRecebido).then((response) => {
        res.status(200).json(response);
    });
};

module.exports = { consultar };
