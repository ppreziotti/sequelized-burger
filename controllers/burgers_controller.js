var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

// Get route for home page - display all burgers
router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObj = {
			burgers: data
		};
		console.log(hbsObj);
		res.render('index', hbsObj);
	});
});

// Post route for creating a burger
router.post('/', function(req, res) {
	burger.insertOne("burger_name", req.body.name, function() {
		res.redirect('/');
	});
});

// Put route for updating the devoured status of a burger
router.put('/:id', function(req, res) {
	var condition = "id = " + req.params.id;
	console.log(condition);
	burger.updateOne({devoured: true}, condition, function() {
		res.redirect('/');
	});
});

// Making the burger controller available to be used in the server file
module.exports = router;