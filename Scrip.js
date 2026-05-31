// Troca a foto principal ao clicar na miniatura
  function trocarFoto(miniatura, src) {
    document.querySelectorAll('.miniatura').forEach(m => m.classList.remove('ativa'));
    miniatura.classList.add('ativa');
    document.querySelector('#foto-principal img').src = src;
  }

  // Seleciona o tamanho
  function selecionarTamanho(el) {
    document.querySelectorAll('.tamanho').forEach(t => t.classList.remove('selecionado'));
    el.classList.add('selecionado');
  }