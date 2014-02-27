define([
	'jquery',
	'underscore',
	'backbone',
	'getbootstrap',
	'modernizr',
	'collections/events',
	'models/event',
	'models/stat',
	'text!views/events/helpers/event.html'
], function($, _, Backbone, GetBootstrap, Modernizr, EventCollection, EventModel, StatModel, EventTemplate) {
		var RecommendView = Backbone.View.extend({
			el: '#recommend',

			events: {
			},

			initialize: function() {
				_.bindAll(this);

				this.collection = new EventCollection();
				this.collection.on('add', this.onAddEventHandler);
				this.collection.set(recommendData.events.event, { parse: true });

				this.stat = new StatModel();
				this.stat.set(recommendData);

				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(function(position) { console.log(position); });
				}

				console.log(this.stat);

				this.render();
			},

			render: function() {
				var self = this;

				$(this.el).find('.js-number').html(self.stat.get('total_items'));

				return this;
			},

			onAddEventHandler: function( model ) {
				$(this.el).find('.events').append(_.template(EventTemplate, model.attributes));
			}


		});
		
		return RecommendView;
	});