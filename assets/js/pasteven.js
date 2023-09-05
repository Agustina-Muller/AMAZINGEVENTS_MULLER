const eventos = data.events;
const fecha = data.currentDate;
const creartarjeta = fcrearcard;
const eventosfiltrados = data.events.filter(evento => evento.date >= data.currentDate);
const checkdinamico = crearCheckboxes;
const filtro = filtradocompleto;

fcrearcard (eventosfiltrados, contenedorevento);


buscar.addEventListener('click', () => {
    Modificarcamposdefiltro(contenedorevento, eventosfiltrados , textbuscar.value, 'name');

})

checkdinamico(eventosfiltrados)

buscar.addEventListener('click', () => {
    filtro(eventosfiltrados, textbuscar.value, 'name');
  
});
  
document.addEventListener('input', e => {
    if (e.target.classList.contains('category')) {
      filtro (eventosfiltrados, textbuscar.value, 'name')
    }
});
