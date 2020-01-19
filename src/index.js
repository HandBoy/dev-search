const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dotenv = require('dotenv').config();

const app = express();

const db_connect = `${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`;

mongoose.connect(db_connect, {
    useNewUrlParser: true,
    useUnifiedTopology: true ,
});

app.use(express.json());
app.use(routes);

app.listen(3333);