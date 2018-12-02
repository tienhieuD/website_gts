
$( document ).ready( function() {

    // thao tác giao diện cho giỏ hàng
    // 1. Khởi tạo giỏ kéo từ phải
    $(".js_cart_opened").sidebar({side: "right"});
    $('.btn.close_cart').on('click', function() {
        $(this).hide(200);
        $('.js_action_open_cart').show(200);
    });
    // 2. Thao tác trên PC
    $('.btn.open_cart').on('click', function() {
        $('.btn.close_cart').show(200);
        $('.js_action_open_cart').hide(200);
        $('.js_action_close_cart').show(200);
    });
    // 3. Thao tác trên mobile
    $('.js_mobile_open_cart').on('click', function() {
        $('.btn.open_cart').click();
        $('.js_mobile_open_cart').hide();
        $('.js_mobile_close_cart').show();
    });
    $('.js_mobile_close_cart').on('click', function() {
        $('.btn.close_cart').click();
        $('.js_mobile_open_cart').show();
        $('.js_mobile_close_cart').hide();
    });
    
});