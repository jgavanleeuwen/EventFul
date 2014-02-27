define([
	'jquery',
	'underscore',
	'backbone',
	'getbootstrap',
	'modernizr',
	'views/index/recommend/recommends'
], function($, _, Backbone, GetBootstrap, Modernizr, RecommendView) {
		var indexView = Backbone.View.extend({
			el: 'body',

			events: {
			},

			initialize: function() {

				_.bindAll(this);
				
			},

			render: function() {
				window.App.views.RecommendView = new RecommendView();
			}


		});
		
		return new indexView();
	});