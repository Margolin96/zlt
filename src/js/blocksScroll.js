$(window).on('scroll', function (){
  
  if($(window).width()>=768) {
    if ($(this).scrollTop() > 200){
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    };
  } else if($(window).width()<768) {
    if ($(this).scrollTop() > 80){
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    };
  };
});