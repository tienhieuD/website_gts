$(document).ready( function () {
    $('.js_toggle_cart').on( 'click' , function (e) {
        e.preventDefault();
        $('.evcenter').toggleClass('emini-cart');
        $('.js_toggle_cart i.fa').toggleClass('fa-angle-left fa-angle-right');
    });
});