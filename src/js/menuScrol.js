$(window).on('scroll', function (){
  
  if ($(this).scrollTop() > 500){
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    }
});