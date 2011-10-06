(function($) {
	$(document).ready(function() {
        $('#ajaxStatus')
            .ajaxStart(function() {
                $(this).show();
            })
            .ajaxStop(function() {
                $(this).hide();
            });

        // Start our ajax request when doAjaxButton is clicked
        $('#doAjaxButton').click(function() {
            $.ajax({
				url: 'ajax-gateway.php',
				data: { val: "Hello world" },
				dataType: 'json',
                success: function(json) {
					// Data processing code
					$('body').append( 'Response Value: ' + json.val );
                }
            });
        });
	});
})(jQuery);

(function($) {
    $(document).ready(function() {
        $('#ajaxError')
             .ajaxError(function(evt, xhr, ajaxOptions, error) {
                $(this)
                      .html( 'Error: ' + ( xhr ? xhr.status : '' ) 
                              + ' ' + ( error ? error :'Unknown' ) )
                      .show();
            })
              .ajaxSuccess(function() {
                  $(this).hide();
              });

        $('#ajaxStatus')
            .ajaxStart(function() {
                $(this).show();
            })
             .ajaxSend(function() {
                  $(this).html('Sending request...');
              })
            .ajaxStop(function() {
                  $(this).html('Request completed...');
                  var t = this;
                  setTimeout(function() {
                      $(t).hide();
                  }, 1500);
            });

        // Start our ajax request when doAjaxButton is clicked
        $('#doAjaxButton').click(function() {
            $.ajax({
                url: 'ajax-data.php',
                complete: function() {
                    // Data processing code
                }
            });
        });
    });
})(jQuery);