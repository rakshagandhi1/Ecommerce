var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/ecommerce';

//connect with database(path of the mongodb and database name)

const initialiseDatabaseConnection = function initialiseDatabaseConnection() {
	mongoose.connect(mongoDB, {useNewUrlParser: true});

	var db = mongoose.connection;
	db.once('open' , function() {
		console.log('connected with database');
	});

	db.on('error', (error) => console.log('error connecting with database', error));
}

module.exports = initialiseDatabaseConnection;
