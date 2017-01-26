'use strict';

$(function($){
  $.fn.dropdownSelect = function() {
    var select = $(this.get());
    $.each(select, function(sk, sv) {
      sv = $(sv);

      var input = $('<input class="ds-field" type="hidden" name="' + sv.attr('name') + '">');
      var ds = $(`<div class="ds" data-name="` + sv.attr('name') + `">
        <div class="ds-top"><i class="ds-arrow"></i><div class="ds-value"></div></div>
        <div class="ds-list-arrow"></div><div class="ds-list"></div>
      </div>`);
      var items = [];
      ds.find('.ds-top').width(sv.width());

      var selected = -1;
      
      $.each(sv.find('option'), function(ok, ov) {
        var value = $(ov).attr('value') === undefined ? "" : $(ov).attr('value');
        if ($(ov).is(':selected')) selected = ok;
        value = $('<div class="ds-option" data-value="' + value + '">' + $(ov).html() + '</div>');
        items.push(value);
      });

      ds.append(input);
      ds.find('.ds-value').append(items[0].html());
      ds.find('.ds-list').append(items);
      sv.replaceWith(ds);
      
      if (selected >= 0) {
        var si = ds.find('.ds-option')[selected];
        if (si) {
          ds.find('.ds-value').html(si.html());
          ds.find('.ds-field').val(si.attr('data-value');
          si.addClass('selected');
        }
      }

      ds.on('click', '.ds-top', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if ($(this).closest('.ds').hasClass('open')) {
          $(this).closest('.ds').removeClass('open');
          $(this).closest('.ds').trigger('selectClose');
        } else {
          $('.ds').removeClass('open')
          $(this).closest('.ds').addClass('open');
          $(this).closest('.ds').trigger('selectOpen');
        }
      })

      ds.on('click', '.ds-option', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var ds = $(this).closest('.ds');
        var value = ds.find('.ds-value');
        var input = ds.find('.ds-field');

        input.val($(this).attr('data-value'));
        value.html($(this).html());

        ds.find('.ds-option.selected').removeClass('selected');
        $(this).addClass('selected');

        ds.removeClass('open');

        ds.trigger('selectChoose')
      })
      
      $(document).on('click', function(e) {
        ds.removeClass('open');
      })
    })
  };
});
