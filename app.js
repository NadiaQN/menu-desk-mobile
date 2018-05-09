$(document).ready(function() {
})

$('.submenu').hide();
$('.item').mouseenter(function() {
  $('.submenu').hide();
  $(this).children('.submenu').show();
})

// Funciones efectos mobile


$('.menu-bar').click(function(){
  $('header').toggleClass('menu_active')
  $('#menu-movil').toggleClass('menu_block')
  //$('.lorem').toggleClass('active')
})

