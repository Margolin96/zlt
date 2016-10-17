$(window).on('scroll', function (){
  
  if ($(this).scrollTop() > 300){
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    };
});