// Initialize.
function init_tabs() {

	// Does element exist?
	if (!$('ul.tabs').length) {

		// If not, exit.
		return;
	}

	// Reveal initial content area(s).
	$('div.tab_content_wrap').each(function() {
		$(this).find('div.tab_content:first').show();
	});

	// Listen for click on tabs.
	$('ul.tabs a').click(function() {

		// If not current tab.
		if (!$(this).hasClass('current')) {

			// Change the current indicator.
			$(this).addClass('current').parent('li').siblings('li').find('a.current').removeClass('current');

			// Show target, hide others.
			$($(this).attr('href')).show().siblings('div.tab_content').hide();
		}

		// Nofollow.
		this.blur();
		return false;
	});
}

// Kick things off.
$(document).ready(function() {
	init_tabs();
});