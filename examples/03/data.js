(function($) {
	$(function() {
		$('#myId').data('myObject', {
		    label: $('#myLabel').get()[0]
		});
		var myObject = $('#myId').data('myObject');
		myObject.label;
	});
})(jQuery);
