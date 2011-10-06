(function($) {
    $(document).ready(function() {
        var horseBreeds = ['Quarter Horse', 'Thoroughbred', 'Arabian'];
        var draftBreeds = ['Belgian', 'Percheron'];
        
        var breeds = $.merge( horseBreeds, draftBreeds );
        $('#horses').html( '<li>' + breeds.join('</li><li>') + '</li>' );
    });
})(jQuery);