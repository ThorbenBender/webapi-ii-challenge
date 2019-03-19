const express = require('express');

const postRoutes = require('./Routes');

const server = express();

server.use(postRoutes);

module.exports = server;
