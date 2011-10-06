jQuery(document).ready(function() {
	
var viewportWidth = jQuery(window).width(),
	viewportHeight = jQuery(window).height(),

	documentScrollTop = jQuery(document).scrollTop(),
	documentScrollLeft = jQuery(document).scrollLeft(),

	$myElement = jQuery('#myElement'),

	verticalVisible, horizontalVisible, 

	elementOffset = $myElement.offset(),
	elementHeight = $myElement.height(),
	elementWidth = $myElement.width(),

	minTop = documentScrollTop,
	maxTop = documentScrollTop + viewportHeight,
	minLeft = documentScrollLeft,
	maxLeft = documentScrollLeft + viewportWidth;

function scrollToPosition(position) {
	jQuery('html,body').animate({
		scrollTop : position.top, 
		scrollLeft : position.left
	}, 300);
}

if (
	((elementOffset.top > minTop && elementOffset.top < maxTop) ||
	(elementOffset.top + elementHeight > minTop && elementOffset.top + elementHeight < maxTop))
&&
	((elementOffset.left > minLeft && elementOffset.left < maxLeft) ||
	(elementOffset.left + elementWidth > minLeft && elementOffset.left + elementWidth < maxLeft))
) { 
	alert('some portion of the element is visible');

	if (elementOffset.top >= minTop && elementOffset.top + elementHeight <= maxTop) {
		verticalVisible = elementHeight;
	} else if (elementOffset.top < minTop) {
		verticalVisible = elementHeight - (minTop - elementOffset.top);
	} else {
		verticalVisible = maxTop - elementOffset.top;
	}

	if (elementOffset.left >= minLeft && elementOffset.left + elementWidth <= maxLeft) {
		horizontalVisible = elementWidth;
	} else if (elementOffset.left < minLeft) {
		horizontalVisible = elementWidth - (minLeft - elementOffset.left);
	} else {
		horizontalVisible = maxLeft - elementOffset.left;
	}

	var percentVerticalVisible = (verticalVisible / elementHeight) * 100;
	var percentHorizontalVisible = (horizontalVisible / elementWidth) * 100;

	if (percentVerticalVisible < 50 || percentHorizontalVisible < 50) {
		alert('less than 50% of element visible; scrolling');
		scrollToPosition(elementOffset);
	} else {
		alert('enough of the element is visible that there is no need to scroll');
	}

} else {
	// element is not visible; scroll to it
	alert('element is not visible; scrolling');
	scrollToPosition(elementOffset);
}

});