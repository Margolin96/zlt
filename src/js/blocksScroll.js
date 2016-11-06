$(window).on('scroll', function (){
  
  if ($(this).scrollTop() > 200){
    $('.header').addClass('header--fixed');
  } else {
    $('.header').removeClass('header--fixed');
  };
});