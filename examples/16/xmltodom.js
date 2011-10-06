(function($) {
    $(document).ready(function() {
        var xml = '<myxml><title>Hello world!</title></myxml>';
        var title = $.xmlDOM( xml ).find('myxml > title').text();
        $('#title').html( title );
    });
})(jQuery);