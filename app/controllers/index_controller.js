var locomotive = require('locomotive');
var Controller = locomotive.Controller;
var Faker = require('Faker');
var http = require('http');
var _ = require('underscore');

var IndexController = new Controller();

IndexController.before('main', function(next) {

	var self = this;

	this.output = '';

	http.request({
		host: 'api.evdb.com',
		path: '/json/events/search?app_key=KrTkTDrh3P5LXnt4&location=Utrecht&q=music&page_size=10&page_number=0&sort_order=date',
		method: 'GET'
	}, function(response) {

		response.setEncoding('UTF-8');

		response.on('data', function(chunk) {
			self.output += chunk;
		});

		response.on('end', function() {
			self.output = JSON.parse(self.output);
			next();
		});

	}).end();

});

IndexController.main = function() {

	this.user = this.req.user;
	this.message = this.req.flash();
  this.render();

};

module.exports = IndexController;
