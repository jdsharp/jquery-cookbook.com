(function($) {
    $(document).ready(function() {
        var serializedJSON = '{"title":"Hello World!","body":"Its great to be alive!"}';
        var message = JSON.parse( serializedJSON );
		alert( "New Message!\nTitle: " + message.title + "\nBody: " + message.body);
	});
})(jQuery);