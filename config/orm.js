// Requiring the MySQL database connection
var connection = require('./connection.js');

// Helper function for SQL syntax.
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
        	arr.push(key + "=" + ob[key]);
    	}
  	}
  return arr.toString();
}

// Creating the ORM for the app
var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw(err);
			}
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table + " (" + cols + ") " + "VALUES (" + "'" + vals + "'" + ");";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, objColsVals, condition, cb) {
		var queryString = "UPDATE " + table + " SET " + objToSql(objColsVals) + " WHERE " + condition;
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
}

// Making the ORM available via exports
module.exports = orm;