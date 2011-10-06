jQuery(document).ready(function() {
var $foo = jQuery('#foo');

$('#bar').click(function() {
	var lastParagraphPosition = jQuery('#foo p:last').position();
	var scrollPosition = $foo.scrollTop() + lastParagraphPosition.top;
	$foo.scrollTop(scrollPosition);
});

$('#bam').click(function() {
	var lastParagraphPosition = jQuery('#foo p:last').position();
	var scrollPosition = $foo.scrollTop() + lastParagraphPosition.top;
	jQuery('#foo').animate({scrollTop: scrollPosition}, 300);
});
});
