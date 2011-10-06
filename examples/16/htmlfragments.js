(function($) {
	$(document).ready(function() {
		$('<div>Hello World</div>')
			.append('<a href="http://jquery.com">A Link</a>')
			.appendTo('body');
	});
})(jQuery);