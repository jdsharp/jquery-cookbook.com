jQuery(document).ready(function() {
	jQuery('#bar').click(function() {
		var viewportWidth = jQuery(window).width(),
			viewportHeight = jQuery(window).height(),

			$foo = jQuery('#foo'),
			elWidth = $foo.width(),
			elHeight = $foo.height(),
			elOffset = $foo.offset();

		jQuery(window)
			.scrollTop(elOffset.top + (elHeight/2) - (viewportHeight/2))
			.scrollLeft(elOffset.left + (elWidth/2) - (viewportWidth/2));
	});
});