var express = require('express');
var db = require('../models');

var router = express.Router();

// Get route for home page - display all burgers
router.get('/', function(req, res) {
	db.Burger.findAll({}).then(function(dbBurger) {
		console.log(dbBurger);
	});
});

// Post route for creating a burger
router.post('/', function(req, res) {
	db.Burger.create({burger_name: req.body.name}).then(function(dbBurger) {
		console.log(dbBurger);
		res.redirect('/');
	});
});

// Put route for updating the devoured status of a burger
router.put('/:id', function(req, res) {
	var burgerId = req.params.id;
	console.log(condition);
	db.Burger.update({
		devoured: true
	}, {
		where: {
			id: burgerId
		}
	}).then(function(dbBurger) {
		console.log(dbBurger);
		res.redirect('/');
	});
});

// Making the burger controller available to be used in the server file
module.exports = router;