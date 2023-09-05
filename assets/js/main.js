const eventos = data.events;
const creartarjeta = fcrearcard;
const checkdinamico = crearCheckboxes;
const filtro = filtradocompleto;

creartarjeta (eventos, contenedorevento);


checkdinamico(eventos);

buscar.addEventListener('click', () => {
  filtro(eventos, textbuscar.value, 'name');

});

document.addEventListener('input', e => {
  if (e.target.classList.contains('category')) {
    filtro (eventos, textbuscar.value, 'name')
  }
});









