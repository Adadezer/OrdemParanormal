function selecionarImagem() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/png';
  input.onchange = function(event) {
    const arquivo = event.target.files[0];
    if (arquivo.type === 'image/png') {
      const img = document.querySelector('.avatar');
      const url = URL.createObjectURL(arquivo);
      img.src = url;
    } else {
      alert('Por favor selecione um arquivo PNG.');
    }
  };
  input.click();
}