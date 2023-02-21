const buttonsLife = document.querySelectorAll(".buttonStatus");
const life = document.querySelector("#heart");

buttonsLife.forEach((botao) => {
  botao.addEventListener('click', () => {
    life.classList.add('pulsando');
    setTimeout(() => {
      life.classList.remove('pulsando');
    }, 100);
  });
});

const progress = document.querySelector(".progress-bar");

const heartMinusOne = document.getElementById("heartMinusOne");
heartMinusOne.addEventListener("click", () => {
  if(progress.value > 0) {
    progress.value -= 1;
  }
});

const heartMinusFive = document.getElementById("heartMinusFive");
heartMinusFive.addEventListener("click", () => {
  if(progress.value > 0) {
    progress.value -= 5;
  }
});

const heartPlusOne = document.getElementById("heartPlusOne");
heartPlusOne.addEventListener("click", () => {
  if(progress.value < 100) {
    progress.value += 1;
  }
});

const heartPlusFive = document.getElementById("heartPlusFive");
heartPlusFive.addEventListener("click", () => {
  if(progress.value < 100) {
    progress.value += 5;
  }
});