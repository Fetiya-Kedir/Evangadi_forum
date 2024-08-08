const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
	host: 'localhost',
	user: 'myEvaAcc',
	password: '1029384756',
	database: 'myevangadi-db',
	connectionLimit: 10,
});
module.exports = dbConnection.promise();
