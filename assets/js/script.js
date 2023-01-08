$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.header-sp-menu').addClass('active');
      } else {
          $('.header-sp-menu').removeClass('active');
      }
  });
});