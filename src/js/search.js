'use strict';

$(function(){
    
  $('.header__search-icon--open' ).click(function(){
    $('.header__search').addClass('header__search--open');
    $('.header__search-icon').removeClass('header__search-icon--open');
  });

  $('.header__search-close' ).click(function(){
    $('.header__search').removeClass('header__search--open');
    $('.header__search-icon').addClass('header__search-icon--open');
  });

});