const btnNav = document.querySelector(".btn-nav");
const cover = document.querySelector(".cover");
const nav = document.querySelector(".navigation");
const btnClose = document.querySelector(".navigation .btn-close")
btnNav.addEventListener("click",function () { 
	cover.classList.add("on");
	nav.classList.add("on");
});
cover.addEventListener("click",function () {
	cover.classList.remove("on");
	nav.classList.remove("on");
});
btnClose.addEventListener("click",function () { 
	cover.classList.remove("on");
	nav.classList.remove("on");
});