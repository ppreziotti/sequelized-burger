module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define("Customer", {
		customer_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				len: [2, 50]
			}
		}
	}, 
		{
			classMethods: {
				associate: function(models) {
					Customer.hasMany(models.Burger, {});
				}
			}
		}
	);
	return Customer;
}