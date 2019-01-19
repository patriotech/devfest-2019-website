$('.menu-items li').click(function() {
  const el = $(this)
  const scrollTo = el.attr('data-scroll');
  $('html, body').animate({
      scrollTop: $(scrollTo).offset().top - 92
  }, 700);
});