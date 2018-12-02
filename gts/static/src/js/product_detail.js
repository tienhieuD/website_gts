$( document ).ready( function() {

    $( '#product_image_zoom' ).elevateZoom({ 
        gallery: 'product_image_gallery', 
        // zoomType: "inner",
        scrollZoom : true,
        zoomWindowFadeIn: 1000,
        zoomWindowFadeOut: 200,
        lensFadeIn: 200,
        lensFadeOut: 200,
        cursor: 'pointer', 
        galleryActiveClass: 'active', 
        imageCrossfade: true, 
        // loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif' 
    });

    //pass the images to Fancybox
    $( '#product_image_zoom' ).bind("click", function (e) {
        var ez = $('#zoom_03').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });
});