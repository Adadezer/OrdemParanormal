// CÓDIGO DO SANIDADE PULSANDO

const buttonsSanity = document.querySelectorAll(".buttonStatusSanity");
const sanity = document.querySelector("#sanity");

buttonsSanity.forEach((botao) => {
  botao.addEventListener('click', () => {
    sanity.classList.add('pulsando');
    setTimeout(() => {
      sanity.classList.remove('pulsando');
    }, 100);
  });
});

// CÓDIGO DA BARRA DE PROGRESSO

const barraSanidade = document.getElementById('barraSanidade');
let maxSanity = 12;
let porcentagemBarraSanidade = 100;
barraSanidade.innerHTML = `${(porcentagemBarraSanidade / 100) * maxSanity}/${maxSanity}`; 

function setProgressSanity(valor) {
  barraSanidade.style.width = valor + '%';
  if (valor >= 51) {
    barraSanidade.classList.add('green');
    barraSanidade.classList.remove('yellow', 'red');
    console.log('valor >>>>', valor)
  } else if (valor >= 11 ) {
    barraSanidade.classList.add('yellow');
    barraSanidade.classList.remove('green', 'red');
    console.log('valor >>>>', valor)
  } else if (valor >= 1) {
    barraSanidade.classList.add('red');
    barraSanidade.classList.remove('green', 'yellow');
    console.log('valor >>>>', valor)
  } else {
    barraSanidade.classList.remove('green', 'yellow', 'red');
    console.log('valor >>>>', valor)  
  }
}

setProgressSanity(100);

// CÓDIGO DOS BOTÕES PARA DIMINUIR/AUMENTAR A BARRA DE PROGRESSO

const sanityMinusOne = document.getElementById("sanityMinusOne");
sanityMinusOne.addEventListener("click", () => {
  if (porcentagemBarraSanidade > 0) {
    porcentagemBarraSanidade -= (100 / maxSanity); // 5%
    setProgressSanity(porcentagemBarraSanidade);
    barraSanidade.innerHTML = `${Math.trunc((porcentagemBarraSanidade / 100) * maxSanity)}/${maxSanity}`;
  }
});

const sanityMinusFive = document.getElementById("sanityMinusFive");
sanityMinusFive.addEventListener("click", () => {
  // se % for maior ou igual os 25% q ele vai tirar
  if (porcentagemBarraSanidade >= ( ( 100 / (maxSanity / 5) ) )) {
    porcentagemBarraSanidade -= (100 / (maxSanity / 5)); // 25%
    setProgressSanity(porcentagemBarraSanidade);
    barraSanidade.innerHTML = `${Math.trunc((porcentagemBarraSanidade / 100) * maxSanity)}/${maxSanity}`;
  }
});

const sanityPlusOne = document.getElementById("sanityPlusOne");
sanityPlusOne.addEventListener("click", () => {
  if (porcentagemBarraSanidade < 100) {
    porcentagemBarraSanidade += (100 / maxSanity); // 5%
    setProgressSanity(porcentagemBarraSanidade);
    barraSanidade.innerHTML = `${Math.trunc((porcentagemBarraSanidade / 100) * maxSanity)}/${maxSanity}`;
  }
});

const sanityPlusFive = document.getElementById("sanityPlusFive");
sanityPlusFive.addEventListener("click", () => {
  // se % for menor ou igual q 100 menos os 25% q ele vai tirar, com maxSanity 20, if % < 80 (100 - 20)
  if (porcentagemBarraSanidade <= 100 - ( 100 / (maxSanity / 5) )) {
    porcentagemBarraSanidade += (100 / (maxSanity / 5)); // 25%
    setProgressSanity(porcentagemBarraSanidade);
    barraSanidade.innerHTML = `${Math.trunc((porcentagemBarraSanidade / 100) * maxSanity)}/${maxSanity}`;
  }
});