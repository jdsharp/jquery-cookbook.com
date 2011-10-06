(function($) {
	$(document).ready(function() {
		$('#update').click(function() {
			$.ajax({
				type: 'GET',
				url: 'hello-ajax.html',
				dataType: 'html',
				success: function(html, textStatus) {
					$('body').append(html);
				},
 				error: function(xhr, textStatus, errorThrown) {
 					alert('An error occurred! ' + errorThrown);
 				}
 			});
 		});
	});
})(jQuery);