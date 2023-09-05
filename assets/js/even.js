const eventos = data.events;
const fecha = data.currentDate;
const creartarjeta = fcrearcard;
const eventosfiltrado = data.events.filter(evento => evento.date < data.currentDate)
const checkdinamico = crearCheckboxes;
const filtro = filtradocompleto;


fcrearcard (eventosfiltrado, contenedorevento);

buscar.addEventListener('click', () => {
    Actualizar(contenedorevento, eventosfiltrado , textbuscar.value, 'name');

});

checkdinamico (eventosfiltrado)

buscar.addEventListener('click', () => {
    filtro(eventosfiltrado, textbuscar.value, 'name');
  
});
  
document.addEventListener('input', e => {
    if (e.target.classList.contains('category')) {
      filtro (eventosfiltrado, textbuscar.value, 'name')
    }
});


   
    
