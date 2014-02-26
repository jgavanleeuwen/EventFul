define([
	'jquery',
	'underscore',
	'backbone',
	'getbootstrap',
	'modernizr'
], function($, _, Backbone, GetBootstrap, Modernizr) {
		var indexView = Backbone.View.extend({
			el: 'body',

			events: {
			},

			initialize: function() {

				_.bindAll(this);
				
			},

			render: function() {

			}


		});
		
		return new indexView();
	});