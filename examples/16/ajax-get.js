(function($) {
	$(document).ready(function() {
		$.get(
		    'hello-world.html', 
		    { hello: 'world' }, 
		    function(data) {
		        alert('Request completed!');
		    },
		    'html'
		);		
	});
})(jQuery);