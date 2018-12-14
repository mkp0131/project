function imgChange() {
	const liElements = document.querySelectorAll('.img-list>li');

	for (let i = 0; i < liElements.length; i++) {
		const imgSrc = liElements[i].querySelector("img").src;
		const findGreyName = imgSrc.lastIndexOf('-grey');
		const findExtension = imgSrc.lastIndexOf('.');
		const colorName = imgSrc.substring(0, findGreyName);
		const greyName = imgSrc.substring(findGreyName, imgSrc.length);
		const extenstion = imgSrc.substring(findExtension, imgSrc.length);

		liElements[i].addEventListener('mouseover', mouseOver);
		liElements[i].addEventListener('mouseout', mouseOut);

		function mouseOver() {
			this.querySelector("img").src = colorName + extenstion;
		};
		function mouseOut() {
			this.querySelector("img").src = colorName + greyName;
		};
	};
};
imgChange();