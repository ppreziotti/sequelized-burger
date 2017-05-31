var Sequelize = require("sequelize");

// Creating mySQL connection via Sequelize
var sequelize = new Sequelize("sequelized_burger_db", "root", "", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

// Making the sequelize connection available via exports
module.exports = sequelize;
