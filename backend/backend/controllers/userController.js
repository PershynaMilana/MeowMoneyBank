const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
    const {name, email, password, password2} = req.body;

    if(password !== password2) {
        return res.status(400).json({error:'Password mismatch'});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = new User({name,email,password:hashedPassword});
    await user.save();

    res.cookie('user', {name, email});

    res.status(201).json({ message: 'Registration successful' });
}

exports.loginUser = async (req,res) => {
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user) {
        return res.status(401).json({error:'User not found'});
    }

    const passwordMatch = await bcrypt.compare(password,user.password);

    if(!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
    }

    res.cookie('user', { name: user.name, email: user.email });

    res.json({ message: 'Login successful' });
}