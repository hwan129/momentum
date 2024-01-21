const images = [
  "photo1.jpeg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpeg",
  "photo7.jpg",
  "photo8.jpg",
  "photo9.jpg",
  "photo10.jpg",
  "photo11.jpg",
  "photo12.jpg",
  "photo13.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤으로 이미지 배열에서 하나 고르기
const bgImage = document.createElement("img"); // html 에 img 태그 추가

bgImage.src = `img/${chosenImage}`; // 이미지 주소 넣기

document.body.appendChild(bgImage); // append는 아래 넣기, prepend는 위에 넣기
