const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const ul = document.querySelector(".js-todo-list");
const TODO_LOCALSTORAGE = 'todoList'
let todoList = [];


function submitHandler(event) {
	event.preventDefault();
	const TODO = input.value;
	todoList.push(TODO);
	saveTodo()
	createTodo(TODO);
	input.value = "";
}

function saveTodo() {
	localStorage.setItem(TODO_LOCALSTORAGE, JSON.stringify(todoList));
};

function createTodo(TODO) {
	const createLi = document.createElement("li");
	const createSpan = document.createElement("span");
	const createButton = document.createElement("button");
	createSpan.innerHTML = TODO;
	createButton.innerHTML = "❌";
	createButton.addEventListener('click', removeTodo)
	createLi.appendChild(createSpan);
	createLi.appendChild(createButton);
	ul.appendChild(createLi);
};

function loadTodo() { 
	const loadTodoLS = localStorage.getItem(TODO_LOCALSTORAGE);
	if ( loadTodoLS ) {
		todoList = JSON.parse(loadTodoLS);
		for (let i = 0; i < todoList.length; i++) {
			createTodo(todoList[i]);
		};
	};
};

function init() { 
	form.addEventListener("submit",submitHandler);
	loadTodo();
};
init();

function removeTodo() {
	const targetList = this.parentNode;
	const refreshTodoList = [];
	for (let n = 0; n < todoList.length; n++) {
		if (todoList[n] == targetList.childNodes[0].innerHTML) {
			continue;
		};
		refreshTodoList.push(todoList[n]);
	};
	todoList = refreshTodoList;
	saveTodo();
	const ttt = targetList.parentNode;
	ttt.removeChild(targetList);
};
