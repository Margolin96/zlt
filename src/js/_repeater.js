'use strict';

$(function($) {
	$.fn.repeater = function(atts_custom) {
		var atts_default = {
			container: '.form__row__group',
			row: '.form__row',
			add: '.btn--add',
			remove: '.btn--remove',
			template: '.form__row--template',
			max: 0
		}

		if ($(this.selector).length == 0) return false

		var atts = $.extend({}, atts_default, atts_custom);

		initialize(this);
		row_add(this);

		function initialize(parent) {
			parent = parent === undefined ? atts.container : parent;

			$(parent).each(function(index, element) {
				var container = this;

				$(container).children(atts.template).hide().find(':input').each(function() {
					$(this).prop('disabled', true);
				});

				var row_count = $(container).children(atts.row).filter(function() {
					return !$(this).hasClass(atts.template.replace('.', ''));
				}).length;

				$(container).attr('data-row-count', row_count);

				$(container).on('click', atts.add, function(event) {
					event.stopImmediatePropagation();

					row_add(container);
				});

				$(container).on('click', atts.remove, function(event) {
					event.stopImmediatePropagation();

					row_remove(this, container);
				});
			});
		}

		function row_add(container) {
			var row_template = $($(container).children(atts.template).clone().removeClass(atts.template.replace('.', ''))[0].outerHTML);
			var row_count = $(container).attr('data-row-count');
			var row_first = $(container).find(atts.row+':not('+atts.template+')')[0];

			$(row_template).find(':input').each(function() {
				$(this).prop('disabled', false);
			});

			if (atts.max > 0) {
				if (row_count >= atts.max - 1) {
					$(row_first).find(atts.add).hide()
					$(row_first).find(atts.remove).show()
				}
				if (row_count >= atts.max) return false
			}

			var new_row = $(row_template).show().appendTo(container);

			if (row_count > 0) { new_row.find(atts.add).hide() }
			else { new_row.find(atts.remove).hide() }

			$(container).attr('data-row-count', ++row_count);

			after_add(container, new_row);

			initialize(container);
		}

		function row_remove(element, container) {
			var row = $(element).parents(atts.row).first();
			var row_count = $(container).attr('data-row-count');

			if (row_count <= 1) return false;

			row.remove();
			$(container).attr('data-row-count', --row_count);

			var row_first = $(container).find(atts.row+':not('+atts.template+')')[0];
			if (atts.max > 0) {
				if (row_count <= atts.max) {
					$(row_first).find(atts.add).show()
					$(row_first).find(atts.remove).hide()
				}
			}
		}

		function after_add(container, new_row) {
			var row_count = $(container).attr('data-row-count');

			row_count++;

			$('*', new_row).each(function() {
				$.each(this.attributes, function(index, element) {
					this.value = this.value.replace(atts.row_count_placeholder, row_count - 1);
				});
			});

			$(container).attr('data-row-count', row_count);
		}
	}
});
