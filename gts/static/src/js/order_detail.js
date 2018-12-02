$( document ).ready( function() {

    // Chức năng upload hình
    $( '.js_choose_image' ).on( 'click', function(e) {
        e.preventDefault();
        $( '.js_input_type_file' ).click();
    });

    $( '.js_input_type_file' ).on( 'change', function(e) {
        e.preventDefault();
        var length = $(this)[0].files.length;
        $( '.js_choose_image' ).text( length + ' tệp tin');
    });
    
    $( '.js_upload' ).on( 'click', function(e) {
        e.preventDefault();
    });
    
    // Chức năng chọn địa chỉ
    $('.js_confirm_address').on( 'click', function(e) {
        // e.preventDefault();
        var checked_radio = $('input[name="shipping_address"]:checked');
        var id = checked_radio.attr('id');
        var address = $('.address_name_cell label[for="'+id+'"]').html()
        $('.js_current_address').html(address);
    });
});