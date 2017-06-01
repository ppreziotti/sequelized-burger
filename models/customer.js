module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define("Customer", {
		customer_name : {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 50]
			}
		},
		eaten_burger: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	return Customer;
}