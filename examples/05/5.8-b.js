jQuery(document).ready(function() {
	var $foo = jQuery('#foo'), 
	    fooOffset = $foo.offset(),
	    $tooltip = $('<div id="tooltip">A new element</div>').appendTo('body');

	$tooltip.css({
	    position : 'absolute',
	    top : fooOffset.top + 10,
	    left : fooOffset.left + ($foo.width() / 2),
	    width : $foo.width() - 20
	});
});
