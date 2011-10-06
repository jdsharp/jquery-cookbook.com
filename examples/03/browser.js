(function($) {
	$(document).ready(function() {
		if ( $.browser.msie && $.browser.version < 7 ) {
			$('body').append([	'<a id="upgradeBrowser" href="http://www.microsoft.com/ie/">You are using ',
								' Internet Explorer version ',
								$.browser.version,
								'. This web site is best experienced with Internet Explorer 7 or greater, click ',
								'here to upgrade.',
								' <span>[Hide]</span></a>'
								].join('') );
			$('#upgradeBrowser span').click(function() {
				$(this).parent().slideUp('normal', function() {
					$(this).remove();
				});
				return false;
			});
		}
	});
})(jQuery);
