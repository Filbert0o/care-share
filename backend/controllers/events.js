const express = require('express');

// create Route instance for Events
const router = express.Router();

// Load Event model

import Event from '../models/Event';

router.get('/test', (req, res) => res.json({ msg: 'Event Works!' }));

router.get('/', (req, res) => {
	Event.find()
		.then((events) => res.json(events))
		.catch((err) =>
			res.status(404).json({
				noeventsfound: 'No events found'
			}).send(err)
		);
});

router.get('/:id', (req, res) => {
	Event.findById(req.params.id)
		.then((event) => res.json(event))
		.catch((err) =>
			res.status(404).json({
				noeventfound: 'No event found with that ID'
			}).send(err)
		);
});

router.post('/create', (req, res) => {
	const newEvent = new Event({
		// title: req.body.title,
		// startDate: req.body.startDate ? req.body.startDate : 'Not Specified',
		// endDate: req.body.endDate ? req.body.endDate : Date.now(),
		description: req.body.description ? req.body.description : 'Vague',
		avatar: req.body.avatar
			? req.body.avatar
			: 'http://asapct.org/wp-content/uploads/2016/02/blank-avatar.jpg'
	});

	newEvent
		.save()
		.then((event) => res.json(event))
		.catch((err) => console.log(err));
});

router.delete('/:id', (req, res) => {
	Event.findById(req.params.id)
		.then((event) => {
			event.remove().then(() =>
				res.json({
					success: true
				})
			);
			res.json({
				msg: `${event.name} is deleted`
			});
		})
		.catch((err) =>
			res.status(404).json({
				noeventfound: 'No event found with that ID'
			}).send(err)
		);
});

router.put('/update', (req, res) => {
	Event.findByIdAndUpdate(req.body._id, req.body, function(err) {
		if (err) throw err;

		res.json({
			msg: `${req.body.name} is updated`
		});
	});
});

module.exports = router;
