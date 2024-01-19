const hellos = document.getElementsByClassName("hi");

const title = document.querySelector(".hello h1"); // hello 클래스 안에 h1부르기. 첫 번째 h1

console.log(title);

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
