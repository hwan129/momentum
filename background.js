const images = [
  "img1.jpeg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpeg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤으로 이미지 배열에서 하나 고르기
const bgImage = document.createElement("img"); // html 에 img 태그 추가
bgImage.classList.add("bgImg"); // image에 bgImage 클래스 추가
bgImage.src = `img/${chosenImage}`; // 이미지 주소 넣기

document.body.appendChild(bgImage); // append는 아래 넣기, prepend는 위에 넣기
