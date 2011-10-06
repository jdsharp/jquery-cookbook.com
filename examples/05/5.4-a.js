jQuery(document).ready(function() {
	jQuery('#bar').click(function() {
	    var fooOffset = jQuery('#foo').offset(), 
		destination = fooOffset.top;
	    jQuery(document).scrollTop(destination);
	});
});