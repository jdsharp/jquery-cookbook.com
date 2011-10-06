(function($) {
  $.jStore.ready(function(ev,engine) {
	  engine.ready(function(ev,engine) {
		  $('#storage-engine').html($.jStore.CurrentEngine.type);
		  $('#task-list').append($.store('task-list'));
	  });
  });

  $('document').ready(function() {
	  $('#task-add').click(function() {
		  var task = $('#task-input').val();
		  var taskHtml = '<li><a href="#">done</a> ' + task + '</li>';
		  $.store('task-list',$('#task-list').append(taskHtml).html());
		  return false;	  
	  });

	  $('#list-clear').click(function() {
		  $('#task-list').empty();
		  $.remove('task-list');
		  return false;
	  });

	  $('#task-list a').live('click',function() {
		  $(this).parent().remove();
		  var taskList = $('#task-list').html();
		  if( taskList ) { $.store('task-list',taskList); }
		  else { $.remove('task-list'); }
		  return false;
	  });
  });
})(jQuery);
