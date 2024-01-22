const clock = document.querySelector("#clock"); // h2의 clock 불러오기

function getClock() {
  const date = new Date(); // date 불러오기
  const hours = String(date.getHours()).padStart(2, "0"); // 현재 hour 불러오기. 무조건 두자리
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
