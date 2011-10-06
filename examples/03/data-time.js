(function($) {
	$(document).ready(function() {
		// Evertime data is set on the document object the 'setData' event is triggered
		// We're testing for data with a key of 'clock' and executing a selector and updating the 
		// html of those elements
		$(document).bind('setData', function(evt, key, value) {
			if ( key == 'clock' ) {
				$('.updateTime').html( value );
			}
		});
		
		// Every 3 seconds this function is triggered setting data for 'clock' on the document object
		setInterval(function() {
			$(document).data('clock', (new Date()).toString() );
		}, 3000);
	});
})(jQuery);
