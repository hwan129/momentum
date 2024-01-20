// // ------------------------------------------------------------------------------
const h1 = document.querySelector("div.hello:first-child h1"); // div.hello:first-child h1 이 안됨???? 위에 h1이 있을 경우 안됨. 태그 체크 안한다?

function handleTitleClick() {
  h1.classList.toggle("clicked"); // clicked 클래스가 있다면 제거, 없다면 추가

  // const clickedClass = "clicked";
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);   // 클래스 리스트에 clicked 제거
  // } else {
  //   h1.classList.add(clickedClass);  // 클래스 리스트에 clicked 추가
  // }
}
h1.addEventListener("click", handleTitleClick);

// // ------------------------------------------------------------------------------
// const h1 = document.querySelector("div.hello:first-child h1"); // div.hello:first-child h1 이 안됨???? 위에 h1이 있을 경우 안됨. 태그 체크 안한다?

// function handleTitleClick() {
//   h1.style.color = "blue";
// }

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!"; // h1(div.hello:first-child h1)에 "Mouse is here!" 넣기
// }

// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!"; // h1(div.hello:first-child h1)에 "Mouse is gone!" 넣기
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato"; // window 크기를 바꿀 경우 색을 tomato로
// }
// function handleWindowCopy() {
//   alert("copier!"); // 복사할 경우 alert함
// }
// function handleWindowOffline() {
//   alert("SOS no WIFI"); // WIFI가 끊기면 alert
// }
// function hadleWindowOnline() {
//   alert("ALL GOOD!"); //WIFI가 연결되면 alert
// }
// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// // ------------------------------------------------------------------------------
// const title = document.querySelector("div.hello:first-child h1"); // div.hello:first-child h1 이 안됨???? 위에 h1이 있을 경우 안됨. 태그 체크 안한다?

// function handleTitleClick() {
//   title.style.color = "blue";
// }

// function handleMouseEnter() {
//   title.innerText = "Mouse is here!"; // title(div.hello:first-child h1)에 "Mouse is here!" 넣기
// }

// function handleMouseLeave() {
//   title.innerText = "Mouse is gone!"; // title(div.hello:first-child h1)에 "Mouse is gone!" 넣기
// }
// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// // ------------------------------------------------------------------------------
// const hellos = document.getElementsByClassName("hi");

// const title = document.querySelector(".hello h1"); // hello 클래스 안에 h1부르기. 첫 번째 h1

// console.log(title);
// console.dir(title); // title의 내부 보기

// title.innerText = "Hello!!"; // hello 클래스 안의 첫번째 h1을 "Hello!!"로 바꿈

// title.style.color = "blue";

// // ------------------------------------------------------------------------------
// document.getElementById("title");
// console.dir(title);
// title.innerText = "got you!"; // change text
// console.log(title.id);
// console.log(title.className);

// // ------------------------------------------------------------------------------
// const age = parseInt(prompt("How old are you???")); // parseInt는 숫자만 처리가능

// console.log(typeof age, typeof parseInt(age)); // parseInt는 숫자만 처리가능
// console.log(isNaN(age)); // 숫자 아닌게 맞는가

// if (isNaN(age) || age < 0) {
//   console.log("Please write a positive number!");
// } else if (age < 18) {
//   console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//   // 1 < age < 2 가 왜 안되는가
//   console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//   console.log("You should exercise");
// } else if (age === 100) {
//   console.log("Wow, you are wise!");
// } else if (age > 80) {
//   console.log("You can do whatever you want.");
// }
// //------------------------------------------------------------------------------
// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);
// //------------------------------------------------------------------------------
// const player = {
//   name: "hwan",
//   sayHello: function (name) {
//     console.log("hello! " + name);
//   },
// };

// console.log(player.name);
// player.sayHello("hwan");

// const week = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];
// //------------------------------------------------------------------------------
// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };

// const addResult = calculator.add(5, 5);
// const subResult = calculator.subtract(addResult, 5);
// const divResult = calculator.divide(5, subResult);
// const multResult = calculator.multiply(5, divResult);
// const powResult = calculator.power(addResult, multResult);
