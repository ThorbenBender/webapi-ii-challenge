const express = require('express');

const server = express();

server.use(postRoutes);

module.exports = server;
