module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6,50];
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
		return Burger;
	});
}

// Syncing with the database
Burger.sync();

// Making the burger model available to be used in the burger controller file
module.exports = Burger;