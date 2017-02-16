'use strict';

$(function($){
  $.fn.dropdownSelect = function() {
    this.each(function(sk, sv) {
      var self = $(this)

      var _ds = $('<div class="ds"></div>')
      var _ds_top = $('<div class="ds-top"><i class="ds-arrow"></i></div>')
      var _ds_value = $('<div class="ds-value"></div>')
      var _ds_list_arrow = $('<div class="ds-list-arrow"></div>')
      var _ds_list = $('<div class="ds-list"></div></div>')
      var _ds_field = self.clone().addClass('ds-field')

      _ds_field.find('option:not([value])').each(function(k, v) {
        $(this).attr('value', this.value)
      })

      var items = getItems(self)
      var value = getValue(self)

      _ds_value.text(value.label)
      _ds_field.val(value.value)

      _ds_top.append(_ds_value)
      _ds_list.append(items._items)

      _ds
        .append(_ds_top)
        .append(_ds_list_arrow)
        .append(_ds_list)
        .prepend(_ds_field)

      _ds_field.find('option[selected]').each(function() {
        this.selected = true
      })

      setListeners(_ds)

      self.replaceWith(_ds)
    })

    function getValue(select) {
      var value = []
      var label = []
      select.find('option:selected').each(function(k, v) {
        value.push(v.value)
        label.push(v.text)
      })
      return {
        value: value.join(),
        label: label.join(', ')
      }
    }

    function getItems(select) {
      var items = [] // array
      var _items = [] // html
      var selected = []

      select.find('option').each(function(k, v) {
        v = $(v)

        var item = {
          key: v.val(),
          value: v.text(),
          selected: v.is(':selected')
        }

        items.push(item)

        _items.push('<div'
            +' class="ds-option '+(item.selected ? 'selected' : '')+'"'
            +' data-selected="'+(item.selected ? 'true' : 'false')+'"'
            +' data-value="'+(item.key)+'">'
            +''+(item.value)
          +'</div>')

        if (item.selected) { selected.push(item) }
      })

      return {
        items: items,
        _items: _items.join(''),
        selected: selected
      }
    }

    function setListeners(_ds) {
      _ds.on('click', '.ds-top', function(e) {
        e.preventDefault()
        e.stopPropagation()

        var ds = $(this).closest('.ds')
        $('.ds').not(ds).removeClass('open')
        ds.toggleClass('open')
      })

      _ds.on('click', '.ds-option', function(e) {
        e.preventDefault()
        e.stopPropagation()

        var ds = $(this).closest('.ds')
        var select = ds.find('.ds-field')
        var multiple = !!select.attr('multiple')
        var value = $(this).attr('data-value')
        var item = select.find('option[value="'+value+'"]')

        if (item.is(':selected')) {
          item.prop('selected', false)
          $(this).removeClass('selected')
        } else {
          item.prop('selected', true)
          $(this).addClass('selected')
        }

        if (multiple != true) {
          select.find('option:selected:not([value="'+value+'"])').prop('selected', false)
          ds.find('.ds-option.selected:not([data-value="'+value+'"])').removeClass('selected')
          ds.removeClass('open')
        }

        value = getValue(select)

        ds.find('.ds-value').text(value.label)
      })
    }
  }
})
