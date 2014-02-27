define([
	'underscore',
	'backbone',
	'models/event'
	], function( _, Backbone, EventModel ) {

		var EventCollection = Backbone.Collection.extend({

			model: EventModel,

			urlRoot: "http://localhost:3000/",

			url: function() {
				return this.urlRoot;
			}

		});

		return EventCollection;

});