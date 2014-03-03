define([
	'jquery',
	'underscore',
	'backbone',
	'getbootstrap',
	'modernizr',
	'typeahead'
], function($, _, Backbone, GetBootstrap, Modernizr, Typeahead) {
		var SidebarView = Backbone.View.extend({
			el: '#menu',

			events: {
			},

			initialize: function() {

				_.bindAll(this);

				$('input[name="query"]').typeahead({
					name: 'query',
					remote: {
						url: 'http://api.evdb.com/json/performers/search?app_key=KrTkTDrh3P5LXnt4&callback=?&q=%QUERY&page_size=5&page_number=0',
						filter: function(response) {
							return _.map(response.performers.performer, function(event) {
								return event.name;
							});
						}
					}
				});
				
			},

			render: function() {
				
			}


		});
		
		return SidebarView;
	});