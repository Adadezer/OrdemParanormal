// CÓDIGO HOVER DO TITULO VIDA
const tituloVida = document.querySelector("#tituloVida");
life.addEventListener('mouseover', () => {
  tituloVida.style.color = 'purple';
});

life.addEventListener('mouseout', () => {
  tituloVida.style.color = '';
});

// CÓDIGO HOVER DO TITULO SANIDADE
const tituloSanidade = document.querySelector("#tituloSanidade");
sanity.addEventListener('mouseover', () => {
  tituloSanidade.style.color = 'purple';
});

sanity.addEventListener('mouseout', () => {
  tituloSanidade.style.color = '';
});

// CÓDIGO HOVER DO TITULO DOS PONTOS DE ESFORÇO POR RODADA
const tituloPeRodada = document.querySelector("#tituloPeRodada");
peRodada.addEventListener('mouseover', () => {
  tituloPeRodada.style.color = 'purple';
});

peRodada.addEventListener('mouseout', () => {
  tituloPeRodada.style.color = '';
});


// CÓDIGO HOVER DO TITULO DOS PONTOS DE ESFORÇO TOTAL
const tituloPeTotal = document.querySelector("#tituloPeTotal");
peTotal.addEventListener('mouseover', () => {
  tituloPeTotal.style.color = 'purple';
});

peTotal.addEventListener('mouseout', () => {
  tituloPeTotal.style.color = '';
});

// CÓDIGO HOVER DO TITULO DEFESA
const tituloDefesa = document.querySelector("#tituloDefesa");
defesa.addEventListener('mouseover', () => {
  tituloDefesa.style.color = 'purple';
});

defesa.addEventListener('mouseout', () => {
  tituloDefesa.style.color = '';
});
