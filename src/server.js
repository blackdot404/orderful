require('dotenv').config();

// importação e execução da conexão com MONGODB
const conn = require('./database/connection');
conn();

const app = require('./app');

app.listen(process.env.API_PORT, () => {
    console.log(`Application running in the port ${process.env.API_PORT}`);
});
