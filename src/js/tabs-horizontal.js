'use strict';

$(function () {
  var $tabs = $('#horizontalTab');
  $tabs.responsiveTabs({
    rotate: false,
    startCollapsed: 'accordion',
    collapsible: 'accordion',
    setHash: true
  });
});