(function($) {
  $('document').ready(function() {
      $('#add-book').data('id',1);

      $('#add-book').click(function() {
	  var curId = $(this).data('id');
	  $.getJSON('server.php', {id: +curId}, function(data) {
	      if( data.none ) { return false; }
	      var divId = 'book-' + curId;
	      $('#book-list').append($('#book-template').clone().attr('id',divId));
	      $('#'+divId).autoRender(data).removeClass('hidden');
	      $('#add-book').data('id', curId + 1);
	    });
	  return false;
	});

      $('#clear-list').click(function() {
	  $('#add-book').data('id',1);
	  $('#book-list').empty();
	  $('#add-book').removeAttr('disabled');
	  return false;
	});
    });
 })(jQuery);
