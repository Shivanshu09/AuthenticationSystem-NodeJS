const express = require('express');
const mongooose = require('mongoose');
const path = require('path');
const config = require('config');

const authRoutes = require('./routes/authRoute');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3001;

const url = config.get('dbURI');
mongooose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(PORT))
    .catch((err) => console.log(err));