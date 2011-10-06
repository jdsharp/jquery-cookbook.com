(function($) {
	$(document).ready(function() {
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		months = $.grep(months, function(value, i) {
			return ( value.indexOf('J') == 0 );
			//return ( i % 2 ) == 0;
		});
		$('#months').html( '<li>' + months.join('</li><li>') + '</li>' );
	});
})(jQuery);
