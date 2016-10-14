'use strict';

$(function(){

  $('.menu-toggle' ).click(function(){
    $('.menu-mobile').addClass('menu-mobile--open');
  });


  $('.menu-mobile__close' ).click(function(){
    $('.menu-mobile').removeClass('menu-mobile--open');
    $('.menu-mobile__sub-list').removeClass('menu-mobile__sub-list--open');
    $('.menu-mobile').removeClass('menu-mobile--submenu');
  });


  $('.menu-mobile__list-item--arrow a' ).click(function(){
    $('.menu-mobile__sub-list').addClass('menu-mobile__sub-list--open');
    $('.menu-mobile').addClass('menu-mobile--submenu');
  });


  $('.menu-mobile__sub-list li:first-child a' ).click(function(){
    $('.menu-mobile__sub-list').removeClass('menu-mobile__sub-list--open');
    $('.menu-mobile').removeClass('menu-mobile--submenu');
  });


  $('.main-slider').slick({
    infinite: true
  });

  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '70px'
  });


  $('.product-slider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slider__nav'
  });


  $('.product-slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.product-slider__for',
    dots: false,
    focusOnSelect: true
  });


  $('.filter__price' ).click(function(){
    $('.filter__price').toggleClass('filter__price--active');
  });


  $('.category-nav__group-name' ).click(function(){
    $(this).toggleClass('category-nav__group-name--open');
  });

  $('#open-catalog' ).click(function(){
    $('.catalog__left').addClass('catalog__left--open');
    $('.catalog__right').addClass('catalog__right--close');
  });


  $('.seo').readmore({
    collapsedHeight: 160,
    moreLink: '<button class="btn btn--clear btn--more">Подробнее</button>',
    lessLink: '<button class="btn btn--clear btn--more">Скрыть</button>'
  });

});