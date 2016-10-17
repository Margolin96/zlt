'use strict';

$(function($){
	$.fn.scrollStick = function() {
		var nodes = $(this.get())

		$(document).scroll(function(e) {
			$.each(nodes, function(k, node) {
				node = $(node)

				var o = node.attr('data-offset') === undefined ? 0 : node.attr('data-offset')
				var t = node.offset().top
				var h = node.outerHeight()

				var np = node.parent()
				var pt = np.offset().top - o
				var ph = np.outerHeight()

				var st = $(document).scrollTop()

				if (st < pt) {
					node.removeClass('sticked-top sticked-bottom')
					return false
				}

				if ((st + h) > (pt + ph)) {
					node.removeClass('sticked-top')
					node.addClass('sticked-bottom')
					return false
				}

				node.addClass('sticked-top')
				node.removeClass('sticked-bottom')
			});	
		})
	}
});
