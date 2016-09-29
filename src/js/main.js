'use strict';

$(function(){

  $('.main-slider').slick({
    infinite: true
  });

  $('.seo').readmore({
    collapsedHeight: 160,
    moreLink: '<button class="btn btn--more">Подробнее</button>',
    lessLink: '<button class="btn btn--more">Скрыть</button>'
  });

});