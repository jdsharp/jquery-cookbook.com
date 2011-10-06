(function($) {
	$(document).ready(function() {
		$('#loadingIndicator')
			.bind('ajaxStart', function() {
				$(this).show();
			})
			.bind('ajaxComplete', function() {
				$(this).hide();
			});
		$.ajaxSetup({
			cache: true,
			dataType: 'json',
			error: function(xhr, status, error) {
				alert('An error occurred: ' + error);
			},
			timeout: 60000, // Wait for 60 seconds before timeing out
			type: 'POST',
			url: 'ajax-gateway.php'
		});
	});
})(jQuery);