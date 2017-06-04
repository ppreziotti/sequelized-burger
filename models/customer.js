module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define("Customer", {
		name: {
			type: DataTypes.STRING,
			primaryKey: true,
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
					Customer.hasOne(models.Burger, {});
				}
			}
		}
	);
	return Customer;
}