$(document).ready(function() {
  $('main').hide().fadeIn(2500);
});
// 2500は2.5秒


jQuery(function ($) {
  const fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      const offset = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 200) {
        $(this).addClass("scroll-in");
      }
    });
  });
});

