require("dotenv").config()
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const isValidEmail = await userModel.findOne({ email });

    if (isValidEmail) {
        return res.status(409).json({ message: 'Email already exists' });
    }

    const user = await userModel.create({ username, email, password });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    


    res.cookie('token', token)
    res.status(201).json({
        message: 'User registered successfully',
        user: user
    })

}


module.exports = { registerUser }