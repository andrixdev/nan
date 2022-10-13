document.addEventListener('DOMContentLoaded', () => {
	
	let dom = {};
	dom.navs = document.querySelectorAll('nav p');
	// Nav listeners
	dom.navs.forEach((el, i) => {
		el.addEventListener('click', (e) => {
			let classs = e.target.id;
			
			// Remove active class on all other nav elements
			dom.navs.forEach((n) => { n.className = ""; });
			// Set active class on selected nav elements
			el.className = "active";
			
			// Hide all sections
			document.querySelectorAll('section').forEach((sec) => {
				sec.style.display = "none";
			});
			// Display only active section
			document.querySelector('section.' + classs).style.display = "inherit";
			
		});
	});
});
