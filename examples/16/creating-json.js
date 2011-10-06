(function($) {
    $(document).ready(function() {
        var messageObject = { title: 'Hello World!', body: 'It\'s great to be alive!' };
        var serializedJSON = JSON.stringify( messageObject );
		
		$('#json').val( serializedJSON );
    });
})(jQuery);