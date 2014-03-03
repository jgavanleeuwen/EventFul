define([
	'jquery',
	'underscore',
	'backbone',
	'getbootstrap',
	'modernizr',
	'views/index/recommend/recommends',
	'views/index/sidebar/sidebar'
], function($, _, Backbone, GetBootstrap, Modernizr, RecommendView, SidebarView) {
		var indexView = Backbone.View.extend({
			el: 'body',

			events: {
			},

			initialize: function() {

				_.bindAll(this);
				
			},

			render: function() {
				window.App.views.RecommendView = new RecommendView();
				window.App.views.SidebarView = new SidebarView();
			}


		});
		
		return new indexView();
	});