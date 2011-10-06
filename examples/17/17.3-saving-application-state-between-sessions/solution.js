(function($) {
  $('document').ready(function() {
      if( window.localStorage ) { appStorage = window.localStorage; }
      else { appStorage = globalStorage[location.hostname]; }

      var listHtml = appStorage['task-list'];
      $('#task-list').append(listHtml.value ? listHtml.value : listHtml);

      $('#task-add').click(function() {
	  var task = $('#task-input').val();
	  var taskHtml = '<li><a href="#">done</a> ' + task + '</li>';
	  appStorage['task-list'] = $('#task-list').append(taskHtml).html();
	  return false;	  
      });

      $('#list-clear').click(function() {
	  $('#task-list').empty();
	  appStorage['task-list'] = '';
	  return false;
      });

      $('#task-list a').live('click',function() {
	  $(this).parent().remove();
	  appStorage['task-list'] = $('#task-list').html();
	  return false;
      });
  });
})(jQuery);
