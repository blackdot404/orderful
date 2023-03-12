const { consultarCep, rastrearEncomendas } = require('correios-brasil');

const cep = (req, res) => {
    //GET consulta cep
    let cepRecebido = req.body.cep;

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

const rastrear = (req, res) => {
    let codigoRecebido = req.body.codigo;

    if (!codigoRecebido) {
        return res.status(400).json({
            statusCode: 400,
            message: 'Código inválido.',
        });
    }

    rastrearEncomendas([codigoRecebido]).then((response) => {
        res.status(200).json(response);
    });
};

module.exports = { cep, rastrear };
