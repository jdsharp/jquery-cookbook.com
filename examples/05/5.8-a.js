jQuery(document).ready(function() {
	var $foo = jQuery('#foo'),
		fooPosition = $foo.position(),
		$tooltip = $('<div id="tooltip">A new element</div>').insertAfter($foo);

	$tooltip.css({
	    position : 'absolute',
	    top : fooPosition.top + 10,
	    left : fooPosition.left + 10,
	    width : $foo.width() - 20
	});
});