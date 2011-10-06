// Initialize.
function init_modal() {

	// Does element exist?
	if (!$('a.modal').length) {

		// If not, exit.
		return;
	}

	// Detect IE6 (boolean).
	var $IE6 = typeof document.addEventListener !== 'function' && !window.XMLHttpRequest;

	// Do some math.
	function sizeModal() {

		// Modal dimensions.
		var $modal = $('#modal_window');
		var $modal_width = $modal.outerWidth();
		var $modal_height = $modal.outerHeight();
		var $modal_top = '-' + Math.floor($modal_height / 2) + 'px';
		var $modal_left = '-' + Math.floor($modal_width / 2) + 'px';

		// Set modal.
		$('#modal_window').css('margin-top', $modal_top).css('margin-left', $modal_left);
	}

	/* For IE6. */
	function positionModal() {

		// Force modal into place.
		$('#modal_wrapper').css('top', $(document).scrollTop() + 'px');
	}

	// Reveal the modal.
	function showModal() {

		// Bleh.
		if ($IE6) {
			positionModal();
		}

		// Unveil the wrapper.
		$('#modal_wrapper').show();

		// Size it.
		sizeModal();

		// Reveal modal window.
		$('#modal_window').css('visibility', 'visible').show();

		// Resize as images load.
		$('#modal_content img').each(function() {
			$(this).load(function() {
				$(this).removeClass('modal_placeholder').show();
				sizeModal();
			});
		});
	}

	// Insert modal at end of </body>.
	$('body').append('<div id="modal_wrapper"><!--[if IE 6]><iframe id="modal_iframe" frameborder="0"></iframe><![endif]--><div id="modal_overlay"></div><div id="modal_window"><div id="modal_bar"><strong>Modal window</strong><a href="#" id="modal_close">Close</a></div><div id="modal_content"></div></div>');

	// Look for modal links.
	$('a.modal').click(function() {

		// Check the href="..."
		var $the_link = $(this).attr('href');

		// Determine link target.
		if ($the_link.match(/^#./)) {

			// Assume #anchor content.
			$('#modal_content').html($($(this).attr('href')).html());
			showModal();

		} else if ($the_link.match(/.jpg$/) || $the_link.match(/.png$/) || $the_link.match(/.gif$/)) {

			// Assume image content.
			$('#modal_content').html('<p id="modal_image_wrapper"><img src="' + $the_link + '" class="modal_placeholder" /></p>');
			showModal();

		} else {

			// Assume external Ajax content.
			$('#modal_content').load($(this).attr('href').replace('#', ' #'), '', showModal);
		}

		// Determine modal title.
		if ($(this).attr('title')) {

			// Insert title.
			$('#modal_bar strong').html($(this).attr('title'));

		} else if ($(this).html() !== '') {

			// Insert link text.
			$('#modal_bar strong').html($(this).html());
		}

		// Nofollow.
		this.blur();
		return false;
	});

	// Hide modal elements.
	$('#modal_overlay, #modal_close').click(function() {

		// Hide the modal.
		$('#modal_wrapper').hide();

		// Hide, because images might load later.
		$('#modal_window').css('visibility', 'hidden');

		// Unbind image listeners.
		$('#modal_content img').each(function() {
			$(this).unbind();
		});

		// Destroy modal content.
		$('#modal_content').html('');

		// Reset modal title.
		$('#modal_bar strong').html('Modal window');

		// Nofollow.
		this.blur();
		return false;
	});

	// Listen for browser scroll, if IE6.
	if ($IE6) {
		$(window).scroll(function() {
			if ($('#modal_wrapper').is(':visible')) {
				positionModal();
			}
		});
	}
}

// Kick things off.
$(document).ready(function() {
	init_modal();
});