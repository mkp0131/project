const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const h1 = document.querySelector(".js-h1");
const SHOW_CLASS = "show";
const SAVE_USER_NAME = "user-name"

function writeName() {
	h1.innerHTML = `Welcome Home! ${localStorage.getItem(SAVE_USER_NAME)}`;
	h1.classList.add(SHOW_CLASS);
	form.classList.remove(SHOW_CLASS);
}

function saveName() {
	localStorage.setItem(SAVE_USER_NAME ,input.value);
}

function submithandler(event) {
	event.preventDefault();
	saveName();
	writeName();
}

function askName() {
	form.classList.add(SHOW_CLASS);
	form.addEventListener("submit",submithandler);
}

if ( localStorage.getItem(SAVE_USER_NAME) ) {
	writeName();
} else {
	askName();
}

// 0. 저장되어 있는 이름이 없다면 이름을 물음.
// 1. 이름제출
// 2. 이름저장
// 3. 이름표시
// 4. 만약 저장되어있는 이름이 있다면 이름을 묻지않고 이름을 표시