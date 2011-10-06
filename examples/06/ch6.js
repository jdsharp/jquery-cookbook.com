(function ($) {
    $.fn.pause = function (t) {
        return this.queue(function () {
            var el = this;
            setTimeout(function () {
                $(el).dequeue();
            }, t);
        });
    };

    $.fn.horizontalAccordion = function (speed) {
    	return this.each(function () {
    		var $accordionHeaders = $(this).find('h3'),
    	    $open = $accordionHeaders.next().filter(':first'),
    	    width = $open.outerWidth();

    	  // initialise the display
    	  $accordionHeaders.next().filter(':not(:first)').css({ display : 'none', width : 0 });

    	  $accordionHeaders.click(function () {
    	    if ($open.prev().get(0) == this) {
    	      return;
    	    }

    	    $open.animate({ width: 0 }, { duration : speed });
    	    $open = $(this).next().animate({ width : width }, { duration : speed });
    	  })
    	});
    };
    
})(jQuery);


$(document).ready(function () {
    var easing = 'swing';
    var $boxes = $('#sequenceEffect .box').hide(),
      div = 0;
    
    $('#easing').change(function () {
      easing = $(this).val();
    }).change(); // trigger reading from the select box
  
    $('input[type=button]').click(function () {
        var $target = $(this).parent().find('.box');
        if (this.id == 'hide') {
            $target.toggle('slow', easing);
        } else if (this.id == 'slideUp' || this.id == 'revealUp') {
            // note that toggle works for slide up, but not for reveal up, as it's initial state is zero height and the toggle doesn't know what the 100% state is.
            if ($target.height() > 0) {
                $target.animate({ opacity: 0, height: 0 }, { duration: 'slow', easing: easing });
            } else {
                $target.animate({ opacity: 1, height: '100%' }, { duration: 'slow', easing: easing });
            }
        } else if (this.id == 'scrollTo') {
            $target.animate({ 'scrollTop' : '+=500' }, 'slow', easing);
        } else if (this.id == 'reload') {
            window.location = window.location;
        } else if (this.id == 'pause') {
            $target.stop(true).animate({ height: 20 }, 'slow', easing).pause(1000).animate({ height: 150 }, 'slow', easing);
        } else if (this.id == 'fxToggle') {
            $.fx.off = !($.fx.off);
            if ($.fx.off == true) {
                $(this).val('fx disabled');
            } else {
                $(this).val('fx enabled');
            }
        } else if (this.id == 'stop') {
            $(':animated').each(function () {
                $(this).queue('fx', []);
            });
        } else if (this.id == 'emptyQueue') {
          $(':animated').each(function () {
              $(this).queue('fx', []).stop();
          });
        } else if (this.id == 'explode') {
          $target.effect('explode', null, 2000);
        } else if (this.id == 'uiAddClass') {
            $target.toggleClass('big', 2000);
        } else if (this.id == 'sequential') {
            (function () {
                $($boxes[div++] || []).fadeIn('slow', arguments.callee);
            })();
        } else if (this.id == 'shakeLong') {
            var d = 50;
            $target
                .animate({ left: d }, 200, easing)
                .animate({ left: d * -1 }, 200, easing)
                .animate({ left: d }, 200, easing)
                .animate({ left: d * -1 }, 200, easing)
                .animate({ left: d }, 200, easing)
                .animate({ left: d * -1 }, 200, easing)
                .animate({ left: d }, 200, easing)
                .animate({ left: d * -1 }, 200, easing)
                .animate({ left: d }, 200, easing)
                .animate({ left: d * -1 }, 200, easing)
                .animate({ left: d }, 200, easing)
                .animate({ left: d * -1 }, 200, easing)
                .animate({ left: d }, 200, easing)
                .animate({ left: d * -1 }, 200, easing)
                .animate({ left: d }, 200, easing)
                .animate({ left: d * -1 }, 200, easing)
                .animate({ left: d }, 200, easing)
                .animate({ left: 0 }, 200, easing); // reset to starting position
        }
        
        return false;
    });
   
    $('#hover').hover(function () {
      $('#hoverBox').stop().fadeTo(200, 1);
    }, function () {
      $('#hoverBox').stop().fadeTo(200, 0);
    });
    
    // resets the scroller position on reload
    $('#scroller').scrollTop(0);
    
    $('#accordionWrapper').horizontalAccordion(200);
});