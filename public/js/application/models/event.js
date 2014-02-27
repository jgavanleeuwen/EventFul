define([
	'underscore',
	'backbone',
	'moment'
	], function( _, Backbone, Moment) {
		var EventModel = Backbone.Model.extend({

			parse: function( response, options ) {
				response.month = moment(response.start_time).format('MMM');
				response.day = moment(response.start_time).format('D');

				return response;
			}

		});
		
		return EventModel;
	});