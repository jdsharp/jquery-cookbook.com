jQuery(document).ready(function() {
	var viewportWidth = jQuery(window).width(),
	    viewportHeight = jQuery(window).height(), 
	    documentScrollTop = jQuery(document).scrollTop(),
	    documentScrollLeft = jQuery(document).scrollLeft(),

	    $myElement = jQuery('#myElement'),

	    elementOffset = $myElement.offset(),
	    elementHeight = $myElement.height(),
	    elementWidth = $myElement.width(),

	    minTop = documentScrollTop,
	    maxTop = documentScrollTop + viewportHeight,
	    minLeft = documentScrollLeft,
	    maxLeft = documentScrollLeft + viewportWidth;

	if (
	    (elementOffset.top > minTop && elementOffset.top + elementHeight < maxTop) &&
		(elementOffset.left > minLeft && elementOffset.left + elementWidth < maxLeft)
	) {
	    alert('entire element is visible');
	} else {
		alert('entire element is not visible');
	}
});