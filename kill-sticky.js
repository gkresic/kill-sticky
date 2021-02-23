(function () {

	var i, elements = document.querySelectorAll('body *');

	// all elements with style "position: fixed"
	for (i = 0; i < elements.length; i++)
		if (getComputedStyle(elements[i]).position === 'fixed')
			elements[i].parentNode.removeChild(elements[i]);

	var selectors = [
		'aside.right-part',		// Index.hr right column
		'div.secondary-content',	// Bug.hr right column
		'aside#slashboxes'		// Slashdot.org right column
	];

	for (s = 0; s < selectors.length; s++) {
		elements = document.querySelectorAll(selectors[s]);
		for (i = 0; i < elements.length; i++)
			elements[i].remove();
	}

})();
