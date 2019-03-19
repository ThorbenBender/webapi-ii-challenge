const express = require('express');

const db = require('./data/db');

const routes = express.Router();

routes.use(express.json());

routes.post('/api/posts', (req, res) => {
	if (!req.body.title || !req.body.title) {
		res.status(400).json({ errorMessage: 'Please provide title and contents for the post.' });
	} else {
		db
			.insert(req.body)
			.then((data) => {
				res.status(201).json(data);
			})
			.catch(() => {
				res.status(500).json({ error: 'There was an error while saving the post to the database' });
			});
	}
});

routes.get('/api/posts/:id', (req, res) => {
	db
		.findById(req.params.id)
		.then((data) => {
			if (data.length === 0) {
				res.status(404).json({ message: 'The post with the specified ID does not exist.' });
			} else {
				res.status(200).json(data);
			}
		})
		.catch(() => {
			res.status(500).json({ error: 'The post information could not be retrieved.' });
		});
});

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
