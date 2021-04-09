const express = require('express');
const mongooose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;