$(document).ready(function() {
    $('.submenu').hide();

    $('.item').mouseenter(function() {
        $('.submenu').hide();
        $(this).children('.submenu').show();
    })
})