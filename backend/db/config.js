const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'myEvaAcc',
	password: process.env.DB_PASSWORD || '1029384756',
	database: process.env.DB_NAME || 'myevangadi-db',
	connectionLimit: 10,
});

module.exports = dbConnection.promise();
