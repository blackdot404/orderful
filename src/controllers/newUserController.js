const userSchema = require('../models/userSchema');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    const { name, email, pwd } = req.body;

    //valida se os campos estão preechidos
    if (!name || !email || !pwd) {
        console.log(name + ' ' + email + ' ' + pwd);
        return res.status(400).json({
            error: 'Please provide all information!',
        });
    }

    //transforma a senha em hash para segurança no db
    const salt = bcrypt.genSaltSync(10);
    const pwdHash = bcrypt.hashSync(pwd, salt);

    try {
        //instancia o novo usuario ao Schema
        const newUser = new userSchema({
            name,
            email,
            pwd: pwdHash,
        });

        //salva o novo usuario no banco
        await newUser.save();

        //retorna status sucesso
        res.status(201).send({
            statuscode: 201,
            message: 'User created successfully!',
            data: { newUser },
        });
    } catch (error) {
        //retorna o erro de servidor
        res.status(500).send({
            statuscode: 500,
            message: error.message,
        });
    }
};

module.exports = {
    signup,
};
