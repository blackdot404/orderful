const mongoose = require('mongoose');

const conn = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_URI);

        console.log('Connection to MongoDB database was successful.');
    } catch (error) {
        console.error(error);
    }
};

module.exports = conn;
