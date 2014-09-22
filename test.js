// Require my new parser.js file.
var Parser = require('./script/parser');

// Load the fs (filesystem) module.
var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile('log.txt', function (err, logData) {
	
	// If and error occurred, throwing it will
	// display the exception and kill our app
	if (err) {
		throw err;
	};

	// logData is a Buffer, convert to string
	var text = logData.toString();

	// Create and instance of the Parser object
	var parser = new Parser();

	// Call the parse function
	console.log(parser.parse(text));

});