'use strict';

$(function(){

  $('.menu-toggle' ).click(function(){
    $('.menu-mobile').removeClass('menu-mobile--close');
    $('.menu-mobile').addClass('menu-mobile--open');
    
    $('body').removeClass('menu-mobile--close');
    $('body').addClass('menu-mobile--open');
  });


  $('.menu-mobile__close' ).click(function(){
    $('.menu-mobile').removeClass('menu-mobile--open');
    $('.menu-mobile__sub-list').removeClass('menu-mobile__sub-list--open');
    $('.menu-mobile').removeClass('menu-mobile--submenu');
    $('.menu-mobile').addClass('menu-mobile--close');
    
    $('body').addClass('menu-mobile--close');
    $('body').removeClass('menu-mobile--open');
  });


  $('.menu-mobile__list-item--arrow a > span' ).click(function(){
    $('.menu-mobile__sub-list').addClass('menu-mobile__sub-list--open');
    $('.menu-mobile').addClass('menu-mobile--submenu');
  });


  $('.menu-mobile__sub-list li:first-child a' ).click(function(){
    $('.menu-mobile__sub-list').removeClass('menu-mobile__sub-list--open');
    $('.menu-mobile').removeClass('menu-mobile--submenu');
  });

  $('.menu-list__item--sublist > a' ).click(function(){
    event.preventDefault();
    $(this).toggleClass('menu-list__item--subopen');
  });

  $('.menu-list__item--subbox > a' ).click(function(){
    event.preventDefault();
    $(this).toggleClass('menu-list__item--subopen');
  });

  $('.menu-list__item--tablet > a' ).click(function(){
    event.preventDefault();
    $(this).toggleClass('menu-list__item--subopen');
  });

  $('.main-slider').slick({
    infinite: true
  });

  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '70px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
    $('.category-nav__group-name').removeClass('category-nav__group-name--open');
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
  
  // Custom number input init
  $('.counter input[type=number]').inputNum();
  
  // Hide-by-checkbox init
  $('input[data-hide]').change(function(e) {
    e.preventDefault();
    var value = $(this).is(':checked');
    if (value) { $($(this).attr('data-hide')).removeClass('dh-disabled'); }
    else { $($(this).attr('data-hide')).addClass('dh-disabled'); }
  })
  $('input[data-hide]').trigger('change');
  
  $('input[data-hide-text]').change(function(e) {
    e.preventDefault();
    var value = $(this).is(':checked');
    if (value) { $($(this).attr('data-hide-text')).removeClass('product-about__drawing-text--hidden'); }
    else { $($(this).attr('data-hide-text')).addClass('product-about__drawing-text--hidden'); }
  })
  $('input[data-hide-text]').trigger('change');

  // Repeater init
  $('#size').repeater({max: 20});
  $('#type').repeater({max: 20});
  
  // Custom select init
  $('.product__body-wrap .form__row:not(.form__row--template) select').dropdownSelect();
  $('.filter__item select').dropdownSelect();
  $('.order-add select').dropdownSelect();
  
  $('#size').on('row-add', function(e) {
    $(this).find('.form__row:not(.form__row--template) select').dropdownSelect();
  });
  $('#type').on('row-add', function(e) {
    $(this).find('.form__row:not(.form__row--template) select').dropdownSelect();
  });

  $('#prod-type').on('row-add', function(e) {
    $(this).find('.form__row:not(.form__row--template) select').dropdownSelect();
  });
  
  // "Add to cart" btn emulation
  $('.product-about .btn--blue').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var count = $('.info-box__counter').text() * 1 + 1;
    var btn = $(this);
    setTimeout(function(e) { btn.text('Добавить в корзину'); }, 1000);
    btn.text('Товар добавлен в корзину');
    $('.info-box__link .count, .info-box__counter').text(count);
  });
  
  // Cart updates emulation
  $('.order-products__item-wrap').on('input-num-change', '.counter__field', function(e) {
    var priceContainer = $(this).closest('.order-products__item-wrap').find('.order-products__price');
    var price = priceContainer.attr('data-price') * $(this).val();
    priceContainer.find('.amount').text(price.toLocaleString('ru-RU'));
    var total = 0;
    $.each($('.order-products__item-wrap .order-products__price .amount'), function(k, v) {
      total += parseInt($(v).html().replace("&nbsp;", '').replace(/ /g, ''));
    });
    $('.order-products__amounts-total .amount').text(total.toLocaleString('ru-RU'));
  });
  
  // Filter emulation
  $.fn.shuffle = function() {
    var allElems = this.get(),
      getRandom = function(max) { return Math.floor(Math.random() * max); },
      shuffled = $.map(allElems, function(){
        var random = getRandom(allElems.length),
          randEl = $(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
        return randEl;
      });
    this.each(function(i){ $(this).replaceWith($(shuffled[i])); });
    return $(shuffled);
  };
  $('.ds').on('selectChoose', function() { $('.catalog__items .item').shuffle(); });
  // $('.category-nav__item').click(function(e) {
  //   e.preventDefault();
  //   $(this).closest('.category-nav__list').find('.category-nav__list-item--active').removeClass('category-nav__list-item--active');
  //   $(this).closest('li').addClass('category-nav__list-item--active');
  //   $('.catalog__items .item').shuffle();
  // });

  // Call order form emulation
  $('.call-order .btn--submit').click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    var form = $(this).closest('form');
    form.find('input').slideUp(100);
    $(this).replaceWith('<h3 style="margin-top: 10px">Спасибо! Перезвоним Вам в течение 15 минут</h3>');
  })
  
  // Stick node in parent init
  $('.scroll-stick').scrollStick();
  $('.product__right').css('min-height', $('.product__left').outerHeight());
  $('.catalog__right').css('min-height', $('.catalog__left').outerHeight());
  
  
  // Input tel phone mask
  $('input[type=tel]').mask('+7 (999) 999-9999');
  
  // Open tab on scroll
  $('#more-info-link').click(function(e) {
    e.preventDefault();

    $('#more-info #tab-all-info a').click();
  })

  // Product form "add-to-cart" interaction
  var form = $('.product-about form.form')
  if (form.length > 0) {
    var formSubmitBtn = form.find('.product-about__price-wrap .btn--orange')
    var formCounter = $('.header .info-box.info-box--cart .info-box__counter')
    var formTrigger = false

    // Debug
    var formCounter = $('.header .info-box .info-box__counter')
    formCounter.html(1)

    form.submit(function(e) {
      // Prevent multiple clicking
      if (formTrigger) return false
      else formTrigger = true

      // Prevent form processing
      e.preventDefault()
      e.stopPropagation()

      // Change btn to "loading" state
      setTimeout(function() {
        setTimeout(function() { formSubmitBtn.text('Добавить в заказ') }, 100)
        setTimeout(function() { formSubmitBtn.css({color: '#FFF'}) }, 200)
        formSubmitBtn.css({color: '#ffa800', background: '#ffa800'})

        formTrigger = false
      }, 1000)

      // Update header formCounter
      formCounter.html(Number(formCounter.html()) + 1)

      // Change btn to "ready" state
      setTimeout(function() { formSubmitBtn.text('Добавлено') }, 100)
      setTimeout(function() { formSubmitBtn.css({color: '#FFF'}) }, 200)
      formSubmitBtn.css({color: '#f09e00', background: '#f09e00'})
    })
  }
});
