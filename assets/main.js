$(document).ready(
  console.log('ready!')
)

$('.menu-list').mouseenter(function(){
  $('.submenu').hide()
  $('.submenu', this).show()
})

$('.submenu').mouseleave(function(){
  $('.submenu').hide()
  $('.submenu', this).show()
})

$('span').click(function(){
  $('header').addClass('active')
  $('span').addClass('close-icon')
  $('#menu-movil').show()
})

$('close-icon').click(function(){
  $('span').removeClass('active')
  $('span').addClass('close-icon')
  $('#menu-movil').show()
})