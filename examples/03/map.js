(function($) {
	$(document).ready(function() {
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		months = $.map(months, function(value, i) {
			return value.substr(0, 3);
		});
		$('#months').html( '<li>' + months.join('</li><li>') + '</li>' );
	});
})(jQuery);
