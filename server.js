const express = require('express');
const cors = require('cors');

const postRoutes = require('./Routes');

const server = express();

server.use(postRoutes);

server.use(cors());

module.exports = server;
