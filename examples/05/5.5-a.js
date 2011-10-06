jQuery(document).ready(function() {
	var viewportWidth = jQuery(window).width(),
		viewportHeight = jQuery(window).height(),
	
 		documentScrollTop = jQuery(document).scrollTop(),
		documentScrollLeft = jQuery(document).scrollLeft(),
	
		minTop = documentScrollTop,
		maxTop = documentScrollTop + viewportHeight,

		minLeft = documentScrollLeft,
		maxLeft = documentScrollLeft + viewportWidth,
	
		$myElement = jQuery('#myElement'),

		elementOffset = $myElement.offset();

	if (
		(elementOffset.top > minTop && elementOffset.top < maxTop) &&
	    (elementOffset.left > minLeft &&elementOffset.left < maxLeft)
	) {
	    alert('element is visible');
	} else {
		alert('element is not visible');
	}
});