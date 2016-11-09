$(window).on('scroll', function (){
  
  if($(window).width()>=768) {
    if ($(this).scrollTop() > 200){
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    };
  } else if(($(window).width()<768) && ($('.menu-mobile').hasClass('menu-mobile--close'))) {
    if ($(this).scrollTop() > 70){
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    };
  };
});