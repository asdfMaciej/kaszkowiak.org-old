// Code taken from https://jsfiddle.net/cferdinandi/qgpxvhhb/18/, modified by me
// Show an element
var show = function (elem) {

	// Get the natural height of the element
	var getHeight = function () {
		elem.style.display = 'block'; // Make it visible
		var height = elem.scrollHeight + 'px'; // Get it's height
		elem.style.display = ''; //  Hide it again
		return height;
	};

	var height = getHeight(); // Get the natural height
	elem.classList.add('visible'); // Make the element visible
	elem.style.height = height; // Update the max-height

	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '';
	}, 350);

};

// Hide an element
var hide = function (elem, father) {

	// Give the element a height to change from
	elem.style.height = elem.scrollHeight + 'px';

	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);

	// When the transition is complete, hide it
	window.setTimeout(function () {
		elem.classList.remove('visible');
		father.classList.remove('expanded');
		if (document.querySelectorAll(".shown").length != 0) { 
			father.classList.add('unexpanded');
		}
	}, 350);

	if (document.querySelectorAll(".shown").length == 0) {
		document.querySelectorAll(".project").forEach(el => {
			el.classList.remove('unexpanded');
		});
	}
	

};

// Listen for click events
document.querySelectorAll(".project").forEach(el => {

	el.addEventListener('click', function (event) {
	el.classList.toggle('shown');

	// Prevent default link behavior
	event.preventDefault();


	var content = document.querySelector(el.getAttribute("href"));
	// Toggle the content
	if (content.classList.contains('visible')) {
		hide(content, el);
	} else {
		// Otherwise, show it
	show(content);
		document.querySelectorAll(".project:not(.shown)").forEach(el => {
			el.classList.add('unexpanded');
		});
		el.classList.remove('unexpanded');
		el.classList.add('expanded');
	}
	
}, false);
});