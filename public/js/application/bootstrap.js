require.config({
	paths: {
		// Libs
		jquery: 'http://code.jquery.com/jquery-latest.min',
		underscore: '../libs/underscore/underscore.min',
		backbone: '../libs/backbone/backbone.min',

		// Twitter Bootstrap
		getbootstrap: '../plugins/bootstrap/bootstrap.min',

		// Modernizr
		modernizr: 'http://modernizr.com/downloads/modernizr-latest',

		// TypeAhead
		typeahead: '../plugins/typeahead/typeahead.min',

		// Moment
		moment: '../plugins/moment/moment.min',

		// Jquery Mobile
		mobile: '../plugins/mobile/jquery.mobile.min'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		getbootstrap: {
			deps: ['jquery']
		},
		typeahead: {
			deps: ['jquery']
		},
		mobile: {
			deps: ['jquery']
		}
	},
	deps: ["main"]
});