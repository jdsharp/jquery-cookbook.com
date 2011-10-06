jQuery(document).ready(function() {
	var checkWidth = function() {
	    var browserWidth = $(window).width();
	    if (browserWidth < 960) {
	        setSize('small');
	    } else {
	        setSize('large');
	    }
	};
	
	var setSize = function(size) {
	    var $body = jQuery('body');
	    jQuery('body').removeClass('large small').addClass(size); 
	};
	
	jQuery(document).ready(function() {
	    checkWidth();
	    $(window).resize(checkWidth);
	});
});
