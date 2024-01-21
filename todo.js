const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos를 string으로 받아서 localStorage에 저장
}

function deleteToDo(event) {
  const li = event.target.parentElement; // click한 li 찾기
  li.remove(); //li 제거
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id)); // 클락한 id와 같은 id를 가진 toDo 제거
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text; // span에 newToDo를 작성
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li가 span을 자식으로 가짐
  li.appendChild(button); //li가 button은 자식으로 가짐
  toDoList.appendChild(li); // #todo-list가 li를 자식으로 가짐
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); // submit(enter)하면 newToDo를 toDos에 push
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // paintToDo를 parsedTodos 배열의 요소마다 실행시키기
}
