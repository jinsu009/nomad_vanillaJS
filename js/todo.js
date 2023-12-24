const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDoArray = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoArray = toDoArray.filter((todo) => {
    return todo.id !== parseInt(li.id);
  });
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', deleteToDo);
  li.id = newTodo.id;
  li.appendChild(span);
  li.appendChild(button);
  span.style.margin = '10px';
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoArray.push(newToDoObj);
  paintTodo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDoArray = parsedToDos;
  parsedToDos.forEach((item) => {
    paintTodo(item);
  });
}
