(function($) {
    $.fn.myPlugin = function(settings) {
        return this.each(function() {
            settings = $.extend({ onShow: null }, settings);
            $(this).show();
            if ( $.isFunction( settings.onShow ) ) {
                settings.onShow.call(this);
            }
        });
    };

    $(document).ready(function() {
        $('div').myPlugin({
            onShow: function() {
                alert('My callback!');
            }
        });
    });
})(jQuery);