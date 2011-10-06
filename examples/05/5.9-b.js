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
	    var $css = jQuery('#css_size');
	    $css.attr('href', 'size-' + size + '.css');
	};
		
	jQuery(document).ready(function() {
	    checkWidth();
	    $(window).resize(checkWidth);
	});
});
