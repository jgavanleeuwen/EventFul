require([
	"backbone",
	"app",
	"router",
	"mobile"
],
function(Backbone, App, Router, Mobile) {

	App.router = new Router();
	Backbone.history.start({ pushState: true, root: '' });

	$(document).on("click", "a[href]:not([data-bypass])", function(evt) {

		var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
		var root = location.protocol + "//" + location.host;

		if (href.prop.slice(0, root.length) === root) {
			evt.preventDefault();
			Backbone.history.navigate(href.attr, false);
		}

	});

	$('.js-tooltip').tooltip();

	$(".js-carousel").swiperight(function() {  
		$(this).carousel('prev');  
	});  
	$(".js-carousel").swipeleft(function() {  
		$(this).carousel('next');  
	});

});