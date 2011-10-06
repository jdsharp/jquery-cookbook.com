(function($) {
	$(document).ready(function(){
		$('#contents').load('hello-world.html', 
			{ hello: 'world' }, 
			function() {
				alert('Request completed!');
			});
	});
})(jQuery);