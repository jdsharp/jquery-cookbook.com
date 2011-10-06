(function($) {
	$(document).ready(function() {
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		$.each(months, function(index, value) {
			$('#months').append('<li>' + value + '</li>');
			// Could also be written as 
			//$('#months').append('<li>' + this + '</li>');
		});

		var days = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
		$.each(days, function(key, value) {
			$('#days').append('<li>' + key + ' (' + value + ')</li>');
			// Could also be written as 
			//$('#days').append('<li>' + key + ' (' + this + ')</li>');
		});
	});
})(jQuery);
