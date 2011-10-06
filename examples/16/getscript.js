(function($) {
    $(document).ready(function() {
        $.getScript('hello-world.js', function() {
            helloWorld('It is a beautiful day!');
        });
    });
})(jQuery);