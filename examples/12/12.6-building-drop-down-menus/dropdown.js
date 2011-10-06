// Initialize.
function init_dropdown() {

	// Does element exist?
	if (!$('ul.dropdown').length) {

		// If not, exit.
		return;
	}

	// Add listener for hover.
	$('ul.dropdown li.dropdown_trigger').hover(function() {

		// Show subsequent <ul>.
		$(this).find('ul').fadeIn(1);
	},
	function() {

		// Hide subsequent <ul>.
		$(this).find('ul').hide();
	});
}

// Kick things off.
$(document).ready(function() {
	init_dropdown();
});