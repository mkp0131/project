
// 1. 리스트 입력
//  - 제출
//  - 저장
// 2. 리스트 표시
//  - 만약 리스트가 저장된 것이 있을 경우 리스트를 표시
// 3. 리스트 삭제

const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const ul = document.querySelector(".js-todo-list");



function submitHandler(event) {
	event.preventDefault();
	saveTodo()
}

let SAVE_TODO_LIST = [];
function saveTodo() {
	const TODO = input.value;
	const todoObj = {
		id : SAVE_TODO_LIST.length+1,
		text : TODO
	};
	SAVE_TODO_LIST.push(todoObj);
	localStorage.setItem('todoList', JSON.stringify(SAVE_TODO_LIST));
	createTodo(TODO);
};

function createTodo(TODO) {
	const createLi = document.createElement("li");
	createLi.innerHTML = "<span>" + TODO + "</span>" + "<button class='btn-remove'>❌</button>";
	ul.appendChild(createLi);
};

function loadTodo() { 
	if ( localStorage.getItem('todoList') ) {
		SAVE_TODO_LIST = JSON.parse(localStorage.getItem('todoList'));
		for (let i = 0; i < SAVE_TODO_LIST.length; i++) {
			createTodo(SAVE_TODO_LIST[i].text);
		};
	};
};

function init() { 
	form.addEventListener("submit",submitHandler);
	loadTodo();
};
init();

function removeTodo() {
	const btnRemove = document.querySelectorAll(".btn-remove");
	for (let i = 0; i < btnRemove.length; i++) {
		btnRemove[i].addEventListener('click',function () { 
			const targetList = this.parentNode;
			for (let n = 0; n < SAVE_TODO_LIST.length; n++) {
				if (SAVE_TODO_LIST[n].text == targetList.querySelector("span").innerHTML) {
					SAVE_TODO_LIST.splice(n,1);
				};
			};
			ul.removeChild(targetList);
			console.log(SAVE_TODO_LIST);
			saveTodo();
		});
	};
};
removeTodo();