var express = require('express');
var db = require('../models');

var router = express.Router();

// Get route for home page - display all burgers
router.get('/', function(req, res) {
	db.Burger.findAll({}).then(function(dbBurger) {
		var hbsObj = {
			burgers: dbBurger
		};
		res.render('index', hbsObj);
	});
});

// Post route for creating a burger
router.post('/', function(req, res) {
	db.Burger.create({burger_name: req.body.name}).then(function(dbBurger) {
		res.redirect('/');
	});
});

// Put route for updating the devoured status of a burger
router.put('/:id', function(req, res) {
	var burgerId = req.params.id;
	db.Burger.update({
		devoured: true
	}, {
		where: {
			id: burgerId
		}
	}).then(function() {
		db.Customer.create({
			name: req.body.customer
		}).then(function(customer) {
			db.Burger.update({
				CustomerName: customer.dataValues.name
			}, {
				where: {
					id: burgerId
				}
			}).then(function(dbBurger) {
				res.redirect('/');
			});
		});
	});
});

// Making the burger controller available to be used in the server file
module.exports = router;