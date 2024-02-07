const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')


//user registration controller
const registerUser = async (req, res) => {
    const { username, email, password } = req.body

    if (!username, !email, !password) {
        return res.status(400).json({ error: 'please fill out all fields' })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'please enter a valid email' })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ error: 'please enter a combination of upperCase, lowerCase,number, and symbol characters for your password' })
    }

    const emailExists = await User.findOne({ email })
    if (emailExists) {
        return res.status(400).json({ error: 'email already exists' })
    }
    const userNameExists = await User.findOne({ username })
    if (userNameExists) {
        return res.status(400).json({ error: 'username already exists' })
    }

    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = await User.create({ username ,email, password: hash})
        res.status(201).json(user)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//user login controller
const loginUser = async (req, res) => {
    const {email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'please fill out all fields' })
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: 'incorrect email' })
        }
        const compare = await bcrypt.compare(password, user.password)
        if (!compare) {
            return res.status(400).json({ error: 'incorrect password' })
        }
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin} , process.env.SECRET , {expiresIn: "20s"})
        res.status(201).json({...user.toObject(), token})
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {registerUser , loginUser}