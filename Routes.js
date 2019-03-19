const express = require('express');

const db = require('./data/db');

const routes = express.Router();

routes.use(express.json());

// routes.post('/api/posts', (req, res) => {

// })

routes.get('/api/posts', (req, res) => {
	db
		.find()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch(() => {
			res.status(500).json({ error: 'The posts information could not be retrieved.' });
		});
});

// routes.get()

// routes.delete();

// routes.put();

module.exports = routes;
