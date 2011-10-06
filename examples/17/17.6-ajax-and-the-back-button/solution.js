(function($) {
  function historyLoad(hash) {
	if(hash) { 
	  $('#definition').load('server.php',{word: hash});	
	} else { 
	 $('#definition').empty(); 
   	}
  }

  $(document).ready(function() {
	  $.history.init(historyLoad);
	  $('a.word').click(function() { 
		  $.history.load($(this).html());
		  return false;
	  });
  });
})(jQuery);
