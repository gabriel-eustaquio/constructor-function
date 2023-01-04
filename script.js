function Dom(seletor) {
  if(typeof seletor === 'string') {
    const elements = document.querySelectorAll(seletor);
    this.elements = elements;
    this.addClass = function(classe) {
      this.elements.forEach((elemento) => {
        elemento.classList.add(classe);
      })
    }
    this.removeClass = function(classe) {
      elements.forEach((elemento) => {
        elemento.classList.remove(classe)
      })
    }
    this.addEventAndToggleClass = function(evento, classe) {
      if(typeof evento !== 'string') {
        console.log(`Informe um evento correto.`)
      } else {
        this.elements.forEach(elemento => {
          elemento.addEventListener(evento, () => {
            elemento.classList.toggle(classe)
            elemento.nextElementSibling.classList.toggle(classe)
          })
        })
      }
    }
  } else {
    console.log(`Será aceito somente strings. ${seletor} não é uma string.`);
  }
}


const dt = new Dom('dt');
dt.addEventAndToggleClass('click', 'ativar');


