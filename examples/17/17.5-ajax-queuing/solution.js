(function($) {
  $('document').ready(function() {
      $('#unqueued-requests').click(function() {
	  $('#response').empty();
	  $.each([1,2,3,4,5,6,7,8,9,10], function() {
	      $.get('server.php',{ data: this }, function(data) {
		  $('#response').append(data);
	      });
	  });
	  return false;
      });

      $('#queued-requests').click(function() {
 	  $('#response').empty();
 	  $.each([1,2,3,4,5,6,7,8,9,10], function() {
  	      $.ajaxQueue({url: 'server.php',
		  data: { data: this },
 		  success: function(data) { $('#response').append(data); }
	      });
	  });
	  $.dequeue( $.ajaxQueue, "ajax" );
	  return false;
      });

      $('#synced-requests').click(function() {
	  $('#response').empty();
	  $.each([1,2,3,4,5,6,7,8,9,10], function() {
 	      $.ajaxSync({url: 'server.php',
		  data: { data: this },
		  success: function(data) { $('#response').append(data); }
	      });
	  });
	  return false;
      });
  });
})(jQuery);
