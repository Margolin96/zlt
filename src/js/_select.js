'use strict';

$(function($){
  $.fn.dropdownSelect = function() {
    var select = $(this.get());
    var input = $('<input class="ds-field" type="hidden" name="' + select.attr('name') + '">')
    var ds = $('<div class="ds">\
      <div class="ds-top"><i class="ds-arrow"></i><div class="ds-value"></div></div>\
      <div class="ds-list-arrow"></div><div class="ds-list"></div>\
    </div>');
    var items = [];

    $.each(select.find('option'), function(k, v) {
      value = $(v).attr('value') === undefined ? "" : $(v).attr('value');
      items.push($('<div class="ds-option" data-value="' + value + '">' + $(v).html() + '</div>'));
    });

    ds.append(input);
    ds.find('.ds-value').append(items[0].html());
    ds.find('.ds-list').append(items);
    select.replaceWith(ds);

    ds.on('click', '.ds-top', function(e) {
      e.preventDefault();

      $(this).closest('.ds').toggleClass('open');
    })

    ds.on('click', '.ds-option', function(e) {
      e.preventDefault();

      var ds = $(this).closest('.ds');
      var value = ds.find('.ds-value');
      var input = ds.find('.ds-field');

      input.val($(this).attr('data-value'));
      value.html($(this).html());

      ds.find('.ds-option.selected').removeClass('selected');
      $(this).addClass('selected');

      ds.removeClass('open');
    })
  };
});

