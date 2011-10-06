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
	    jQuery('link.css_size').each(function() {
	        var $this = $(this);

	        if ($this.hasClass(size)) {
	            $this
	                .removeAttr('disabled')
	                .attr('rel', 'stylesheet');
	        } else {
	            $this
	                .attr('disabled', true)
	                .attr('rel', 'alternate stylesheet');
	        }        
	    });
	};
			
	jQuery(document).ready(function() {
	    checkWidth();
	    $(window).resize(checkWidth);
	});
});
