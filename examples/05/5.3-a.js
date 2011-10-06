jQuery(document).ready(function() {
	var $foo = jQuery('#foo');
	var $bar = jQuery('#bar');
	
	var $results = jQuery('#results');

	var fooPosition = $foo.position(); 
	var barPosition = $bar.position(); 

	var fooOffset = $foo.offset(); 
	var barOffset = $bar.offset(); 
	
	var $fooOffsetParent = $foo.offsetParent();
	var $barOffsetParent = $bar.offsetParent();
	
	$results
		.append('<p>#foo position.top: ' + fooPosition.top + '</p>') // 10
		.append('<p>#foo position.left: ' + fooPosition.left + '</p>') // 10
		.append('<p>#bar position.top: ' + barPosition.top + '</p>') // 10
		.append('<p>#bar position.left: ' + barPosition.left + '</p>') // 10
		
		.append('<p>#foo offset.top: ' + fooOffset.top + '</p>') // 10
		.append('<p>#foo offset.left: ' + fooOffset.left + '</p>') // 10
		.append('<p>#bar offset.top: ' + barOffset.top + '</p>') // 10
		.append('<p>#bar offset.left: ' + barOffset.left + '</p>') // 10
		
		.append('<p>ID of #foo offsetParent: ' 
			+ $fooOffsetParent.attr('id')) // the_offset_parent
		.append('<p>ID of #bar offsetParent: ' 
			+ $barOffsetParent.attr('id')); // the_offset_parent
});
