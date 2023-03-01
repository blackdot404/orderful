require('dotenv').config();

const app = require('./app');

app.listen(process.env.API_PORT, () => {
    console.log(`Aplicação rodando na porta ${process.env.API_PORT}`);
});
