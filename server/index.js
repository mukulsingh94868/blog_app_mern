const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.create({ username, password })
    res.status(200).json(userDoc);
});

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
