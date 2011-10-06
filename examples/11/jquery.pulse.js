;(function($) {
  $.fn.pulse = function(options) {
    // Merge passed options with defaults
    var opts = $.extend({}, $.fn.pulse.defaults, options);

    return this.each(function() {

      // Merge in the metadata elements for this specific node
      var o = $.metadata ? $.extend({}, opts, $.metadata.get(this)) : opts;

      doPulse($(this),o);
    });
  };

  function doPulse($obj,opts) { 
    for(var i = 0;i<opts.pulses;i++) {
      $obj.fadeTo(opts.speed,opts.fadeLow).fadeTo(opts.speed,opts.fadeHigh);
    }

    // Reset to normal
    $obj.fadeTo(opts.speed,1); 
  }

  // Define our base to add to
  $.pulse = {};

  // Static Function
  $.pulse.impulse = function($obj) {
    var opts = {
      speed: 2500,
      pulses: 10,
      fadeLow: 0.2,
      fadeHigh: 0.8
    };
    doPulse($obj,opts); 
  }

  // Static Function
  $.pulse.warpspeed = function($obj) {
    var opts = {
      speed: 25,
      pulses: 100,
      fadeLow: 0.2,
      fadeHigh: 0.8
    };
    doPulse($obj,opts); 
  }

  // Pulse plugin default options
  $.fn.pulse.defaults = { 
    speed: "slow",
    pulses: 2,
    fadeLow: 0.2,
    fadeHigh: 1
  };
})(jQuery);

