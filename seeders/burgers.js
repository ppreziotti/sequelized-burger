var db = require('../models');

db.Burger.create({
	burger_name: "Bacon Double Cheeseburger",
	createdAt: Date.now(),
	updatedAt: Date.now()
});
db.Burger.create({
	burger_name: "Lamb Burger with Feta",
	createdAt: Date.now(),
	updatedAt: Date.now()
});
db.Burger.create({
	burger_name: "Veggie Burger with Avocado",
	createdAt: Date.now(),
	updatedAt: Date.now()
});
