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

const barra = document.getElementById('barra');
let maxLife = 20;
let porcentagemBarra = 100;
barra.innerHTML = `${((porcentagemBarra / 100) * maxLife)}/${maxLife}`; 

function setProgress(valor) {
  barra.style.width = valor + '%';
  if (valor >= 51) {
    barra.classList.add('green');
    barra.classList.remove('yellow', 'red');
    console.log('valor >>>>', valor)
  } else if (valor >= 11 ) {
    barra.classList.add('yellow');
    barra.classList.remove('green', 'red');
    console.log('valor >>>>', valor)
  } else if (valor >= 1) {
    barra.classList.add('red');
    barra.classList.remove('green', 'yellow');
    console.log('valor >>>>', valor)
  } else {
    barra.classList.remove('green', 'yellow', 'red');
    console.log('valor >>>>', valor)  
  }
}

setProgress(100);

const heartMinusOne = document.getElementById("heartMinusOne");
heartMinusOne.addEventListener("click", () => {
  if (porcentagemBarra > 0) {
    porcentagemBarra -= (100 / maxLife); // 5%
    setProgress(porcentagemBarra);
    barra.innerHTML = `${((porcentagemBarra / 100) * maxLife)}/${maxLife}`;
  }
});

const heartMinusFive = document.getElementById("heartMinusFive");
heartMinusFive.addEventListener("click", () => {
  // se % for maior ou igual os 25% q ele vai tirar
  if (porcentagemBarra >= ( ( 100 / (maxLife / 5) ) )) {
    porcentagemBarra -= (100 / (maxLife / 5)); // 25%
    setProgress(porcentagemBarra);
    barra.innerHTML = `${((porcentagemBarra / 100) * maxLife)}/${maxLife}`;
  }
});

const heartPlusOne = document.getElementById("heartPlusOne");
heartPlusOne.addEventListener("click", () => {
  if (porcentagemBarra < 100) {
    porcentagemBarra += (100 / maxLife); // 5%
    setProgress(porcentagemBarra);
    barra.innerHTML = `${((porcentagemBarra / 100) * maxLife)}/${maxLife}`;
  }
});

const heartPlusFive = document.getElementById("heartPlusFive");
heartPlusFive.addEventListener("click", () => {
  // se % for menor ou igual q 100 menos os 25% q ele vai tirar, com maxLife 20, % < 80 (100 - 20)
  if (porcentagemBarra <= 100 - ( 100 / (maxLife / 5) )) {
    porcentagemBarra += (100 / (maxLife / 5)); // 25%
    setProgress(porcentagemBarra);
    barra.innerHTML = `${((porcentagemBarra / 100) * maxLife)}/${maxLife}`;
  }
});