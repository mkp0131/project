const tapTitle = document.querySelectorAll('.tap-title>li');
const tapContents = document.querySelectorAll('.tap-contents>div');
const ttt = document.querySelector('.tap-title');
console.log(ttt);

const tapSelector = function() {
	for (let i = 0; i < tapTitle.length; i++) {
		tapTitle[i].classList.remove('on');
		tapContents[i].classList.remove('on');
		if ( this === tapTitle[i] ) {
			tapContents[i].classList.add('on');
		};
	}
	this.classList.add('on');
}

for (let i = 0; i < tapTitle.length; i++) {
	tapTitle[i].addEventListener('click',tapSelector);
}

