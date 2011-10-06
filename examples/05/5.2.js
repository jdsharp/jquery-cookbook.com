jQuery(document).ready(function() {
	var $myDiv = jQuery('#myDiv');
	var $results = jQuery('#results');
	
	jQuery('<p>Computed width: ' + $myDiv.width() + '</p>')
		.appendTo($results); // 100
	jQuery('<p>Computed height: ' + $myDiv.height() + '</p>')
		.appendTo($results); // 30
	jQuery('<p>Inner width: ' + $myDiv.innerWidth() + '</p>')
		.appendTo($results); // 120
	jQuery('<p>Inner height: ' + $myDiv.innerHeight() + '</p>')
		.appendTo($results); // 50
	jQuery('<p>Outer width: ' + $myDiv.outerWidth() + '</p>')
		.appendTo($results); // 122
	jQuery('<p>Outer height: ' + $myDiv.outerHeight() + '</p>')
		.appendTo($results); // 52
	
	jQuery('<p>Document outer height: ' + jQuery(document).outerHeight() + '</p>')
		.appendTo($results); // NaN
	jQuery('<p>Document inner height: ' + jQuery(document).innerHeight() + '</p>')
		.appendTo($results); // NaN
	jQuery('<p>Window outer height: ' + jQuery(window).outerHeight() + '</p>')
		.appendTo($results); // NaN
	jQuery('<p>Window inner height: ' + jQuery(window).innerHeight() + '</p>')
		.appendTo($results); // NaN
});
