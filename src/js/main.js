'use strict';

$(function(){

  $('.menu-toggle' ).click(function(){
    $('.menu-mobile').addClass('menu-mobile--open');
  });

  $('.menu-mobile__close' ).click(function(){
    $('.menu-mobile').removeClass('menu-mobile--open');
  });

  $('.main-slider').slick({
    infinite: true
  });

  $('.seo').readmore({
    collapsedHeight: 160,
    moreLink: '<button class="btn btn--more">Подробнее</button>',
    lessLink: '<button class="btn btn--more">Скрыть</button>'
  });

});