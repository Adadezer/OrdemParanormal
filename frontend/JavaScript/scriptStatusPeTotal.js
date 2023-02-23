// CÓDIGO DOS PONTOS DE ESFORÇO TOTAL PULSANDO

const buttonsPeTotal = document.querySelectorAll(".buttonStatusPeTotal");
const peTotal = document.querySelector("#peTotal");


buttonsPeTotal.forEach((botao) => {
  botao.addEventListener('click', () => {
    peTotal.classList.add('pulsando');
    setTimeout(() => {
      peTotal.classList.remove('pulsando');
    }, 100);
  });
});

// CÓDIGO HOVER DO TITULO DOS PONTOS DE ESFORÇO TOTAL

const tituloPeTotal = document.querySelector("#tituloPeTotal");
peTotal.addEventListener('mouseover', () => {
  tituloPeTotal.style.color = 'rgb(201, 164, 0)';
});

peTotal.addEventListener('mouseout', () => {
  tituloPeTotal.style.color = '';
});

// CÓDIGO DA BARRA DE PROGRESSO

const barraPeTotal = document.getElementById('barraPeTotal');
let maxPeTotal = 10;
let porcentagemBarraPeTotal = 100;
barraPeTotal.innerHTML = `${(porcentagemBarraPeTotal / 100) * maxPeTotal}/${maxPeTotal}`; 

function setProgressPeTotal(valor) {
  barraPeTotal.style.width = valor + '%';
  if (valor >= 51) {
    barraPeTotal.classList.add('green');
    barraPeTotal.classList.remove('yellow', 'red');
    console.log('valor >>>>', valor)
  } else if (valor >= 11 ) {
    barraPeTotal.classList.add('yellow');
    barraPeTotal.classList.remove('green', 'red');
    console.log('valor >>>>', valor)
  } else if (valor >= 1) {
    barraPeTotal.classList.add('red');
    barraPeTotal.classList.remove('green', 'yellow');
    console.log('valor >>>>', valor)
  } else {
    barraPeTotal.classList.remove('green', 'yellow', 'red');
    console.log('valor >>>>', valor)  
  }
}

setProgressPeTotal(100);

// CÓDIGO DOS BOTÕES PARA DIMINUIR/AUMENTAR A BARRA DE PROGRESSO

const peTotalMinusOne = document.getElementById("peTotalMinusOne");
peTotalMinusOne.addEventListener("click", () => {
  if (porcentagemBarraPeTotal > 0) {
    porcentagemBarraPeTotal -= (100 / maxPeTotal); // 5%
    setProgressPeTotal(porcentagemBarraPeTotal);
    barraPeTotal.innerHTML = `${Math.trunc((porcentagemBarraPeTotal / 100) * maxPeTotal)}/${maxPeTotal}`;
  }
});

const peTotalMinusFive = document.getElementById("peTotalMinusFive");
peTotalMinusFive.addEventListener("click", () => {
  // se % for maior ou igual os 25% q ele vai tirar
  if (porcentagemBarraPeTotal >= ( ( 100 / (maxPeTotal / 5) ) )) {
    porcentagemBarraPeTotal -= (100 / (maxPeTotal / 5)); // 25%
    setProgressPeTotal(porcentagemBarraPeTotal);
    barraPeTotal.innerHTML = `${Math.trunc((porcentagemBarraPeTotal / 100) * maxPeTotal)}/${maxPeTotal}`;
  }
});

const peTotalPlusOne = document.getElementById("peTotalPlusOne");
peTotalPlusOne.addEventListener("click", () => {
  if (porcentagemBarraPeTotal < 100) {
    porcentagemBarraPeTotal += (100 / maxPeTotal); // 5%
    setProgressPeTotal(porcentagemBarraPeTotal);
    barraPeTotal.innerHTML = `${Math.trunc((porcentagemBarraPeTotal / 100) * maxPeTotal)}/${maxPeTotal}`;
  }
});

const peTotalPlusFive = document.getElementById("peTotalPlusFive");
peTotalPlusFive.addEventListener("click", () => {
  // se % for menor ou igual q 100 menos os 25% q ele vai tirar, com maxPeTotal 20, if % < 80 (100 - 20)
  if (porcentagemBarraPeTotal <= 100 - ( 100 / (maxPeTotal / 5) )) {
    porcentagemBarraPeTotal += (100 / (maxPeTotal / 5)); // 25%
    setProgressPeTotal(porcentagemBarraPeTotal);
    barraPeTotal.innerHTML = `${Math.trunc((porcentagemBarraPeTotal / 100) * maxPeTotal)}/${maxPeTotal}`;
  }
});