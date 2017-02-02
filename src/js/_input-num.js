'use strict';

$(function($){
  $.fn.inputNum = function() {
    function inputNumUpdate(nav, change) {
      var counter = $(nav).closest('.counter')
      var field = counter.find('.counter__field')
      var number = counter.find('.counter__number')
      var value = field.val() * 1

      value += change * 1

      if (change > 0) {
        if ((counter.attr('data-max') != 0) && (value > counter.attr('data-max'))) {
          value = counter.attr('data-max')
        }
      } else {
        if (value < counter.attr('data-min')) {
          value = counter.attr('data-min')
        }
      }

      field.val(value)
      number.text(value)
      field.trigger('input-num-change')
    }

    var inputs = $(this.get())

    $.each(inputs, function(k, input) {
      inp = $(input)
      input.className += ' counter__number counter__field'

      var val = inp.val() === '' ? 1 : inp.val()
      var min = inp.attr('min') === undefined ? 1 : inp.attr('min')
      var max = inp.attr('max') === undefined ? 0 : inp.attr('max')

      var nInput = $('<div class="counter" data-min="'+min+'" data-max="'+max+'">\
        <span class="counter__nav counter__nav--minus">-</span>\
        ' + input.outerHTML + '\
        <span class="counter__nav counter__nav--plus">+</span>\
      </div>')

      var container = inp.attr('data-container') === undefined ? nInput : inp.closest(inp.attr('data-container'))

      inp.replaceWith(nInput)

      container.on('click', '.counter__nav--minus', function(e) {
        e.preventDefault()

        inputNumUpdate(this, -1)
        $(this).find('.counter__field').trigger('input-num-minus')
      })

      container.on('click', '.counter__nav--plus', function(e) {
        e.preventDefault()

        inputNumUpdate(this, 1)
        $(this).find('.counter__field').trigger('input-num-plus')
      })

      container.on('change', '.counter__field', function(e) {
        $(this).trigger('input-num-change')
      })
    })
  }
});
