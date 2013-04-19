jQuery(document).ready(function() {
    jQuery('.pikachoose-gallery').each(function() {
        jQuery(this).PikaChoose({carousel: jQuery(this).data('carousel'), speed: 4000});
    });
})