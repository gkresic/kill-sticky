(function () {

	var i, elements = document.querySelectorAll('body *');

	// all elements with position 'fixed' or 'sticky'
	for (i = 0; i < elements.length; i++) {
		var style = getComputedStyle(elements[i]);
		if (style.position === 'fixed' || style.position === 'sticky')
			elements[i].parentNode.removeChild(elements[i]);
	}

	var selectors = [
		'aside.right-part',		// Index.hr right column 1
		'div.right-part',		// Index.hr right column 2
		'div.secondary-content',	// Bug.hr right column
		'aside#slashboxes'		// Slashdot.org right column
	];

	for (s = 0; s < selectors.length; s++) {
		elements = document.querySelectorAll(selectors[s]);
		for (i = 0; i < elements.length; i++)
			elements[i].remove();
	}

})();
