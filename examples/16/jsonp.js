(function($) {
    $(document).ready(function() {
        var url     = 'http://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
        var params  = { format: 'json' };
        $.getJSON(url, params, function(json) {
            if ( json.items ) {
                $.each( json.items, function(i, n) {
                    var item = json.items[i];
                    $('<a href="' + item.link + '"></a>')
                        .append('<img src="' + item.media.m + '" />')
                        .appendTo('#photos');
                    return ( i < 2 );
                });
            }
        });
    });
})(jQuery);