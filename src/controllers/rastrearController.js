const { rastrearEncomendas } = require('correios-brasil');

const rastrear = (req, res) => {
    //GET rastrear encomenda
    let codEncomenda = [req.params.codigo];

    rastrearEncomendas(codEncomenda).then((response) => {
        res.status(200).send(response);
    });
};

module.exports = { rastrear };
