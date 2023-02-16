$(function () {
  $('.hamburger').click(function () {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.header-sp-menu').addClass('active');
      } else {
          $('.header-sp-menu').removeClass('active');
      }
  });
});

$(function () {
  let pageTop = $('.page-top-button');
  pageTop.hide();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll)
    if(scroll > 500) {
      pageTop.fadeIn()
    }else{
      pageTop.fadeOut()
    }
  })
  pageTop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500)
    return false;
  })
});