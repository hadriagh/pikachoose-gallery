jQuery(document).ready(function() {
    jQuery('.pikachoose-gallery').each(function() {
        var carousel = jQuery(this).data('carousel');

        jQuery(this).PikaChoose({carousel: carousel, speed: 4000});
    });
})