const express = require("express");
const { consultarCep, rastrearEncomendas } = require("correios-brasil");

require("dotenv").config();

const app = express();
const port = process.env.API_PORT;

//GET consulta cep
app.get("/consulta/cep/:cep", function (req, res, next) {
  let cepRecebido = req.params.cep;

  consultarCep(cepRecebido).then((response) => {
    res.send(response);
  });
});

//GET rastrear encomenda
app.get("/consulta/rastrear/:codigo", function (req, res, next) {
  let codEncomenda = [req.params.codigo];

  rastrearEncomendas(codEncomenda).then((response) => {
    res.send(response);
  });
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
