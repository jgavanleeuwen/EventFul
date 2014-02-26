define([
	'underscore',
	'backbone',
	'models/model'
	], function( _, Backbone, Model ) {

		var Collection = Backbone.Collection.extend({

			model: Model,

			urlRoot: "http://localhost:3000/",

			url: function() {
				return this.urlRoot;
			}

		});

		return Collection;

});