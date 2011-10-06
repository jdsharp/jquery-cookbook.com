// Initialize.
function init_accordion() {

	// Does element exist?
	if (!$('dl.accordion').length) {

		// If not, exit.
		return;
	}

	// Gather all accordions.
	$('dl.accordion').each(function() {

		// Reveal first accordion item.
		$(this).find('dt:first a').addClass('accordion_expanded').end().find('dd:first').show();

		// Added to round corners via CSS.
		$(this).find('dt:last').addClass('last');
	});

	// Event listener for click.
	$('dl.accordion dt a').click(function() {

		// Get parent <dl>.
		var $dl = $(this).parents('dl:first');

		// Get the next <dd>.
		var $dd = $(this).parent('dt').next('dd');

		// Class final <dt>.
		function findLast() {
			if ($dl.find('dd:last').is(':hidden')) {
				$dl.find('dt:last').addClass('last');
			}
		}

		// Is it visible?
		if ($dd.is(':hidden')) {

			// Expand the <dd>, hide others.
			$dd.slideDown('fast').siblings('dd:visible').slideUp('fast', findLast);

			// Change arrow state, remove class="last" from <dt>.
			$(this).addClass('accordion_expanded').parent('dt').removeClass('last').siblings('dt').find('a').removeClass('accordion_expanded');
		}

		// Nofollow.
		this.blur();
		return false;
	});
}

// Kick things off.
$(document).ready(function() {
	init_accordion();
});