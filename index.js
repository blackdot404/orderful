require("dotenv").config();

const axios = require("axios");
const https = require("https");

const username = process.env.USER_CORREIOS;
const password = process.env.PASS_CORREIOS;

const options = {
  method: "post",
  url: "https://api.correios.com.br/auth/token",
  auth: {
    username,
    password,
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
};

axios(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
