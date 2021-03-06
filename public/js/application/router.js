define([
	'jquery',
	'underscore',
	'backbone',
	'events/dispatcher',
	'views/index/index'
	], 
	function($, _, Backbone, Dispatcher, IndexView) {
		var AppRouter = Backbone.Router.extend({

			// Routes
			routes: {
				'_=_': 'index',
				'*actions' : 'index'
			},

			index: function() {
				IndexView.render();
			}

		});

		return AppRouter;
	});
