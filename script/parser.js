// Parser constructor
var Parser = function () {
	
};

// Parses the specified text.
Parser.prototype.parse = function (text) {
	
	var results = {};

	// Break up the file into lines.
	var lines = text.split('\n');

	// Now break lines -> parts -> letters
	lines.forEach(function (line) {
		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2]);

		if (!results[letter]) {
			results[letter] = 0;
		}

		results[letter] += parseInt(count);
	});

	return results;
};

// Export the Parser Constructor from this module.
module.exports = Parser;