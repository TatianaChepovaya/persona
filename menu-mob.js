$(document).ready(function () {
  //   console.log("ready!");
  $('.btn__menu').on('click', function () {
    //  alert();
    $('.mobile__menu').toggleClass('active')
    $('.btn__menu').toggleClass('active')
    $('.header__container').toggleClass('active')
    $('body').toggleClass('active')
  })
})

$(document).ready(function () {
  if ($(window).width() < 768) {
    $('.btn__pay').appendTo('.mobile__menu')
    $('.nav').appendTo('.mobile__menu')
    $('.language').appendTo('.mobile__menu')
    console.log('1024')
  }
})
