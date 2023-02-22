// CÓDIGO DO CORAÇÃO PULSANDO

const buttonsLife = document.querySelectorAll(".buttonStatusLife");
const life = document.querySelector("#heart");


buttonsLife.forEach((botao) => {
  botao.addEventListener('click', () => {
    life.classList.add('pulsando');
    setTimeout(() => {
      life.classList.remove('pulsando');
    }, 100);
  });
});

// CÓDIGO HOVER DO TITULO VIDA

const tituloVida = document.querySelector("#tituloVida");
life.addEventListener('mouseover', () => {
  tituloVida.style.color = 'rgb(201, 164, 0)';
});

life.addEventListener('mouseout', () => {
  tituloVida.style.color = '';
});

// CÓDIGO DA BARRA DE PROGRESSO

const barraVida = document.getElementById('barraVida');
let maxLife = 22;
let porcentagemBarraVida = 100;
barraVida.innerHTML = `${(porcentagemBarraVida / 100) * maxLife}/${maxLife}`; 

function setProgress(valor) {
  barraVida.style.width = valor + '%';
  if (valor >= 51) {
    barraVida.classList.add('green');
    barraVida.classList.remove('yellow', 'red');
    console.log('valor >>>>', valor)
  } else if (valor >= 11 ) {
    barraVida.classList.add('yellow');
    barraVida.classList.remove('green', 'red');
    console.log('valor >>>>', valor)
  } else if (valor >= 1) {
    barraVida.classList.add('red');
    barraVida.classList.remove('green', 'yellow');
    console.log('valor >>>>', valor)
  } else {
    barraVida.classList.remove('green', 'yellow', 'red');
    console.log('valor >>>>', valor)  
  }
}

setProgress(100);

// CÓDIGO DOS BOTÕES PARA DIMINUIR/AUMENTAR A BARRA DE PROGRESSO

const heartMinusOne = document.getElementById("heartMinusOne");
heartMinusOne.addEventListener("click", () => {
  if (porcentagemBarraVida > 0) {
    porcentagemBarraVida -= (100 / maxLife); // 5%
    setProgress(porcentagemBarraVida);
    barraVida.innerHTML = `${Math.trunc((porcentagemBarraVida / 100) * maxLife)}/${maxLife}`;
  }
});

const heartMinusFive = document.getElementById("heartMinusFive");
heartMinusFive.addEventListener("click", () => {
  // se % for maior ou igual os 25% q ele vai tirar
  if (porcentagemBarraVida >= ( ( 100 / (maxLife / 5) ) )) {
    porcentagemBarraVida -= (100 / (maxLife / 5)); // 25%
    setProgress(porcentagemBarraVida);
    barraVida.innerHTML = `${Math.trunc((porcentagemBarraVida / 100) * maxLife)}/${maxLife}`;
  }
});

const heartPlusOne = document.getElementById("heartPlusOne");
heartPlusOne.addEventListener("click", () => {
  if (porcentagemBarraVida < 100) {
    porcentagemBarraVida += (100 / maxLife); // 5%
    setProgress(porcentagemBarraVida);
    barraVida.innerHTML = `${Math.trunc((porcentagemBarraVida / 100) * maxLife)}/${maxLife}`;
  }
});

const heartPlusFive = document.getElementById("heartPlusFive");
heartPlusFive.addEventListener("click", () => {
  // se % for menor ou igual q 100 menos os 25% q ele vai tirar, com maxLife 20, if % < 80 (100 - 20)
  if (porcentagemBarraVida <= 100 - ( 100 / (maxLife / 5) )) {
    porcentagemBarraVida += (100 / (maxLife / 5)); // 25%
    setProgress(porcentagemBarraVida);
    barraVida.innerHTML = `${Math.trunc((porcentagemBarraVida / 100) * maxLife)}/${maxLife}`;
  }
});