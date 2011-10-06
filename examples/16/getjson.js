(function($) {
	$(document).ready(function() {
		$.getJSON(
		    'http://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
		    function(json) {
				var html = new Array();
				$.each(json.items, function(i, item) {
					html.push( '<img src="' + item.media.m + '" /><br/>' );
				});
				$('body').append( html.join('') );
		    }
		);
	});
})(jQuery);