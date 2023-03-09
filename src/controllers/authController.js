const userSchema = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const SECRET = process.env.SECRET_KEY;

const login = async (req, res) => {
    try {
        const { email, pwd } = req.body;

        if (!email || !pwd) {
            return res.status(400).send({
                statusCode: 400,
                message: 'Please provide email and password',
            });
        }

        const user = await userSchema.findOne({ email });

        if (!user) {
            return res.status(401).send({
                statusCode: 401,
                message: 'User not found!',
                data: { email },
            });
        }

        const isMatch = await bcrypt.compare(pwd, user.pwd);

        if (!isMatch) {
            return res.status(401).send({
                statusCode: 401,
                message: 'Invalid password!',
            });
        }

        const token = jwt.sign({ id: user._id }, SECRET);

        res.status(200).send({
            statusCode: 200,
            message: 'Login successful',
            data: token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            statusCode: 500,
            message: error.message,
        });
    }
};

module.exports = login;
