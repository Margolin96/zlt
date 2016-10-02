'use strict';

(function() {
  var tabControls = document.querySelectorAll('.js-tab-control');

  if (tabControls) {
    tabControls = Array.prototype.slice.call(tabControls, 0);

    tabControls.forEach(function(tabControl) {
      tabControl.addEventListener('click', function(event) {
        event.preventDefault();

        var target = tabControl.dataset.target;
        var tabParent = tabControl.parentNode.classList[0];

        var tabParents = document.querySelectorAll('.' + tabParent);
        tabParents = Array.prototype.slice.call(tabParents, 0);

        tabParents.forEach(function(stab) {
          stab.classList.remove(tabParent + '--active');
        });

        tabControl.parentNode.classList.add(tabParent + '--active');

        var targetBlock = document.querySelector('.' + target);

        if (targetBlock) {
          var allTabs = document.querySelectorAll('.js-tab');
          allTabs = Array.prototype.slice.call(allTabs, 0);

          allTabs.forEach(function(tab) {
            if (tab === targetBlock) {
              tab.classList.add('js-tab--active');
            } else {
              tab.classList.remove('js-tab--active');
            }
          });
        }


      });
    });
  }
})();
