require('dotenv').config();

const app = require('./app');

app.listen(process.env.API_PORT, () => {
    console.log(`Application running in the port ${process.env.API_PORT}`);
});
