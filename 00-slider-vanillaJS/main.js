const sldierElements = document.getElementsByClassName('slider');

function slider() {
	for (let i = 0; i < sldierElements.length; i++) {
		if ( sldierElements[i].classList.contains('on') ) {
			sldierElements[i].classList.remove('on');
			if ( sldierElements[i].nextElementSibling === null ) {
				sldierElements[0].classList.add('on');
				return;
			};
			sldierElements[i].nextElementSibling.classList.add('on');
			return;
		};
	};
};
setInterval(() => {
	slider();
}, 1000);