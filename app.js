$(document).ready(function() {
})

$('.submenu').hide();
$('.item').mouseenter(function() {
  $('.submenu').hide();
  $(this).children('.submenu').show();
})

// Funciones efectos mobile

$('.close-menu-side').click(function(){
  console.log('kol')
  $('span').removeClass('close-menu-side')
  $('header').removeClass('active')
  $('span').addClass('menu-bar')
  $('#menu-movil').hide()
})

$('.menu-bar').click(function(){
  $('header').addClass('active')
  $('span').addClass('close-menu-side')
  $('span').removeClass('menu-bar')
  $('#menu-movil').show()
})

