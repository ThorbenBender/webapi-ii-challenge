const express = require('express');
const cors = require('cors');

const postRoutes = require('./Routes');

const server = express();

server.use(express.json());

server.use(cors());

server.use(postRoutes);

module.exports = server;
