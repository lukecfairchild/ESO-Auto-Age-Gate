// ==UserScript==
// @name         ESO Auto Age Gate
// @version      0.1
// @description  Auto Enters a age on ESO's Age Gate
// @author       Luke Fairchild
// @match        https://www.elderscrollsonline.com/en-us/agegate
// ==/UserScript==

(function() {
    'use strict';

  $('#month').val(1);
  $('#day').val(1);
  $('#year').val(1950);
  document.getElementsByTagName('form')[0].submit();
})();