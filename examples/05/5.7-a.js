jQuery(document).ready(function() {
	jQuery('#bar').click(function() {
		var $myElement = jQuery('#foo p').eq(0), 
			elPosition = $myElement.position();

		$myElement.css({
		    position : 'absolute',
		    top : elPosition.top,
		    left : elPosition.left
		});
	});
	
	jQuery('#bam').click(function() {
		var $myElement = jQuery('#foo p').eq(1),
			elPosition = $myElement.position();

		$myElement.css({
		    position : 'absolute',
		    top : elPosition.top + 20,
		    left : elPosition.left + 20
		});
	});
});

