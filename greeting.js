// js 코드 순서가 event가 발생하면 돌아가나?
// display: hidden은 공간이 없어지는 건가, 공간은 유지하되 안의 html이 없어지나
const loginForm = document.querySelector("#login-form"); // loginform 코드
const loginInput = document.querySelector("#login-form input"); // loginform 코드의 input 부분
const greeting = document.querySelector("#greeting"); // greeting 부분

const HIDDEN_CLASSNAME = "hidden"; // 클래스 이름
const USERNAME_KEY = "username"; //

function onLoginSubmit(event) {
  // submit 했을 경우
  // event 공간을 준다는게 뭔소리지?
  event.preventDefault(); // 브라우저의 첫번째 기본 동작을 막음 ex) submit했을 때 새로고침 하는 것
  const username = loginInput.value; // 입력한 username 저장
  loginForm.classList.add(HIDDEN_CLASSNAME); // hidden클래스(display:none) 추가
  localStorage.setItem(USERNAME_KEY, username); // storage에 username 저장. (KEY, VALUE)
  paintGreetings(username);
}

function paintGreetings(username) {
  // submit하면 나타나는 화면
  greeting.innerText = `Hello, ${username}`; //greeting에 text 변경
  greeting.classList.remove(HIDDEN_CLASSNAME); // hidden클래스 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // storage의 username 불러오기
if (savedUsername === null) {
  // uesrname을 입력하지 않았다면. (새로고침해도 loginform이 나오지 않게 하기 위해)
  loginForm.classList.remove(HIDDEN_CLASSNAME); // hidden클래스 제거. loginform이 보이게
  loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트 발생시 onLoginSubmit으로
} else {
  paintGreetings(savedUsername);
}
