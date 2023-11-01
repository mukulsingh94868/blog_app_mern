const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

const salt = bcrypt.genSaltSync(10);
const secret = 'sdfsf435thhhbt34sfc45h5645ghn45vcb';

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (error) {
        res.status(400).json({ message: error })
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            // res.json(token);
            res.cookie('token', token).json('Ok');
        });
    } else {
        res.status(400).json('Wrong Credentials');
    }
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    })
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('Ok');
})

var CONNECTION_URL = 'mongodb+srv://blog_app:blog_app_123@cluster0.t5q7pda.mongodb.net/blog_mern_app';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
            console.log('Database connection established!');
        })

    }).catch((error) => {
        console.log(`error: ${error}`);
    })

// mongodb+srv://blog_app:blog_app_123@cluster0.t5q7pda.mongodb.net/blog_mern_app
