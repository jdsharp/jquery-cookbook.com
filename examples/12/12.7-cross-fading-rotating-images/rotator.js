// Initialize.
function init_rotator() {

	// Does element exist?
	if (!$('#rotator').length) {

		// If not, exit.
		return;
	}

	// Rotate speed.
	var speed = 2000;

	// Pause setting.
	var pause = false;

	// Rotator function.
	function rotate(element) {

		// Stop, if user has interacted.
		if (pause) {
			return;
		}

		// Either the next /first <li>.
		var $next_li = $(element).next('li').length ? $(element).next('li') : $('#rotator li:first');

		// Either next / first control link.
		var $next_a = $('#rotator_controls a.current').parent('li').next('li').length ? $('#rotator_controls a.current').parent('li').next('li').find('a') : $('#rotator_controls a:first');

		// Animate.
		$('#rotator_controls a.current').removeClass('current');
		$next_a.addClass('current');

		// Continue.
		function doIt() {
			rotate($next_li);
		}

		// Fade out <li>.
		$(element).fadeOut(speed);

		// Show next <li>.
		$($next_li).fadeIn(speed, function() {

			// Slight delay.
			setTimeout(doIt, speed);
		});
	}

	// Add click listeners for controls.
	$('#rotator_controls a').click(function() {

		// Change button text.
		$('#rotator_play_pause').html('PLAY');

		// Show target, hide other <li>.
		$($(this).attr('href')).show().siblings('li').hide();

		// Add class="current" and remove from all others.
		$(this).addClass('current').parent('li').siblings('li').find('a').removeClass('current');;

		// Pause animation.
		pause = true;

		// Nofollow.
		this.blur();
		return false;
	});

	// Pause / Play the animation.
	$('#rotator_play_pause').click(function() {

		// What does the button say?
		if ($(this).html() === 'PAUSE') {

			// Stop rotation.
			pause = true;

			// Change the text.
			$(this).html('PLAY');

		} else {

			// Remove class="pause".
			pause = false;

			// Start the rotation.
			rotate('#rotator li:visible:first');

			// Change the text.
			$(this).html('PAUSE');
		}

		this.blur();
		return false;
	});

	// Hide all but first <li>.
	$('#rotator li:first').show();

	// Wait for page load.
	$(window).load(function() {

		// Begin rotation.
		rotate($('#rotator li:visible:first'));
	});
}

// Kick things off.
$(document).ready(function() {
	init_rotator();
});