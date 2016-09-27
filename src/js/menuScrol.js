$(window).on('scroll', function (){
  
  if ($(this).scrollTop() > 700){
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    }
});