let images = [
  "contBcg-0.jpeg",
  "contBcg-1.jpeg",
  "contBcg-2.jpeg",
  "contBcg-3.jpeg",
  "contBcg-4.jpeg",
];

let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");
let imgContainer = document.querySelector(".img-container");
let i = 0;

btnRight.addEventListener("click", function () {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  imgContainer.style.backgroundImage = `url('./img/contBcg-${i}.jpeg')`;
});
btnLeft.addEventListener("click", function () {
  if (i > 0) {
    i--;
  } else {
    i = 4;
  }
  imgContainer.style.backgroundImage = `url('./img/contBcg-${i}.jpeg')`;
});