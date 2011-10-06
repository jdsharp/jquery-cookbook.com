(function($) {
    $(document).ready(function() {
        $('input.cleanup').blur(function() {
            var value = $.trim( $(this).val() );
            $(this).val( value );
        });
    });
})(jQuery);