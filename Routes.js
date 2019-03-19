const express = require('express');

const db = require('./data/db');

const routes = express.Router();

routes.use(express.json());

routes.post('/api/posts', (req, res) => {
	if (!req.body.contents || !req.body.title) {
		res.status(400).json({ errorMessage: 'Please provide title and contents for the post.' });
	} else {
		db
			.insert(req.body)
			.then((data) => {
				db.findById(data.id).then((newUser) => {
					res.json(newUser);
				});
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
			if (data.length === 1) {
				res.status(404).json({ message: 'The post with the specified ID does not exist.' });
			} else {
				res.status(200).json(data);
			}
		})
		.catch(() => {
			res.status(500).json({ error: 'The post information could not be retrieved.' });
		});
});

routes.delete('/api/posts/:id', (req, res) => {
	db
		.remove(req.params.id)
		.then((data) => {
			if (data === 1) {
				res.status(200).json(data);
			} else {
				res.json(404).json({ message: 'The post with the specified ID does not exist.' });
			}
		})
		.catch(() => {
			res.status(500).json({ error: 'The post could not be removed' });
		});
});

routes.put('/api/posts/:id', (req, res) => {
	console.log(req.body);
	if (!req.body.contents || !req.body.title) {
		res.status(400).json({ errorMessage: 'Please provide title and contents for the post.' });
	}
	db
		.update(req.params.id, req.body)
		.then((data) => {
			if (data === 1) {
				res.status(200).json(data);
			} else {
				json.status(404).json({ message: 'The post with the specified ID does not exist.' });
			}
		})
		.catch(() => {
			res.json(500).json({ error: 'The post information could not be modified.' });
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
