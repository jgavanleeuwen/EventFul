var mongoose = require('mongoose');

module.exports = function() {
	
	mongoose.connect('mongodb://localhost/eventful', function(err) {
		if(!err) {
			console.log('   info  -'.cyan + ' mongoose started');
		}
	});

};
