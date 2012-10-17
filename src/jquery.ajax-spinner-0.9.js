;(function($) {

	$.spinner = function(options) {

		var plugin = this;
		plugin.settings = {};
		plugin.spinner = null;

		var defaults = {
			autoSpinner: true,
			html: '<div style="position:absolute;top:0;left:0;width:100%;height:##winHeight##px;background:##bgcolor## url(##image##) no-repeat center center;-moz-opacity:##opacity##;filter:alpha(opacity=##opacityIE##);opacity:##opacity##;"></div>',
			image: '',
			opacity: 0.7,
			bgcolor: '#000000',
			delay: 500
		};

		var init = function() {
			plugin.settings = $.extend({}, defaults, options);

			$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
				if (plugin.settings.autoSpinner) {
					var tId = setTimeout(function () {
						plugin.start();
					}, plugin.settings.delay);

					jqXHR.always(function () {
						clearTimeout(tId);
						plugin.stop();
					});
				}
			});

			var imgPath = plugin.settings.image;
			plugin.settings.image = new Image();
			plugin.settings.image.src = imgPath;

			$(window).resize(function() {
				resizeScroll();
			});

			$(window).scroll(function() {
				resizeScroll();
			});
		};

		plugin.start = function(options) {
			if (!plugin.spinner) {
				plugin.spinner = $(spinnerHtml()).appendTo('body');
			}
		};

		plugin.stop = function() {
			if (plugin.spinner) {
				$(plugin.spinner).remove();
				plugin.spinner = null;
			}
		};
		
		var spinnerHtml = function() {
			var html = plugin.settings.html;

			html = html.replace(/\#\#opacity\#\#/g, plugin.settings.opacity);
			html = html.replace(/\#\#opacityIE\#\#/g, plugin.settings.opacity * 100);
			html = html.replace(/\#\#bgcolor\#\#/g, plugin.settings.bgcolor);
			html = html.replace(/\#\#image\#\#/g, plugin.settings.image.src);
			html = html.replace(/\#\#winHeight\#\#/g, $(document).height());

			return html;
		};

		var resizeScroll = function() {
			if (plugin.spinner) {
				$(plugin.spinner).css("height", $(window).height());
			}
		};

		init();

	};

})(jQuery);
