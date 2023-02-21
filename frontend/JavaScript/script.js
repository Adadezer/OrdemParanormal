const barra = document.getElementById('barra');
let porcentagemBarra = 100;

function setProgress(valor) {
  barra.style.width = valor + '%';
  if (valor >= 51) {
    barra.classList.add('green');
    barra.classList.remove('yellow', 'red');
  } else if (valor >= 11 ) {
    barra.classList.add('yellow');
    barra.classList.remove('green', 'red');
  } else if (valor >= 1) {
    barra.classList.add('red');
    barra.classList.remove('green', 'yellow');
  } else {
    barra.classList.remove('green', 'yellow', 'red');
  }
}

setProgress(100);

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

const heartMinusOne = document.getElementById("heartMinusOne");
heartMinusOne.addEventListener("click", () => {
  if (porcentagemBarra > 0) {
    porcentagemBarra -= 1;
    setProgress(porcentagemBarra);
  }
});

const heartMinusFive = document.getElementById("heartMinusFive");
heartMinusFive.addEventListener("click", () => {
  if (porcentagemBarra > 0) {
    porcentagemBarra -= 5;
    setProgress(porcentagemBarra);
  }
});

const heartPlusOne = document.getElementById("heartPlusOne");
heartPlusOne.addEventListener("click", () => {
  if (porcentagemBarra < 100) {
    porcentagemBarra += 1;
    setProgress(porcentagemBarra); 
  }
});

const heartPlusFive = document.getElementById("heartPlusFive");
heartPlusFive.addEventListener("click", () => {
  if (porcentagemBarra < 100) {
    porcentagemBarra += 5;
    setProgress(porcentagemBarra); 
  }
});