jQuery(document).ready(function() {
	$('.square').each(function(){
		if( sessionStorage[window.location + this.id] == 'true' ) { 
			$(this).addClass('selected'); 
		}
	});

	$('.square').click(function() {
		$(this).toggleClass('selected');
		sessionStorage[window.location + this.id] = $(this).hasClass('selected');
		return false; 
	});
});
