// Initialize.
function init_panels() {

	// Does element exist?
	if (!$('ul.panels').length) {

		// If not, exit.
		return;
	}

	// Animation speed.
	var speed = 200;

	// Add class for last <li>.
	$('ul.panels li:last-child').addClass('last');

	// Begin with mouseover.
	$('ul.panels li').hover(function() {

		// Alter target <li>.
		$(this).stop().animate({
			width: '360px',
			fontSize: '150px'

		// Speed.
		}, speed)

		// Alter sibling <li>.
		.siblings('li').stop().animate({
			width: '135px',
			fontSize: '50px'

		// Speed.
		}, speed);
	},

	// End with mouseout.
	function() {

		// Restore target <li>.
		$(this).stop().animate({
			width: '180px',
			fontSize: '100px'

		// Speed.
		}, speed)

		// Restore sibling <li>.
		.siblings('li').stop().animate({
			width: '180px',
			fontSize: '100px'

		// Speed.
		}, speed);
	});
}

// Kick things off.
$(document).ready(function() {
	init_panels();
});