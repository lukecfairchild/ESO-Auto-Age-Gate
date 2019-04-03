// ==UserScript==
// @name         ESO Auto Age Gate
// @version      0.3
// @description  Auto Enters a age on ESO's Age Gate
// @author       Luke Fairchild
// @match        https://www.elderscrollsonline.com/en-us/agegate*
// ==/UserScript==

(function() {
	'use strict';

	$('#day').val('1').change();
	$('#month').val('1').change();
	$('#year').val('1950').change();
	$('.btn.btn-gate')[0].click();
})();
