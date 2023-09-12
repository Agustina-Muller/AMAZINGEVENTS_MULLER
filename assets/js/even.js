const creartarjeta = fcrearcard;
const checkdinamico = crearCheckboxes;
const filtro = filtradocompleto;


Data(proximosEventos)

function proximosEventos (events, currentDate){
    const eventosfiltrado = events.filter(evento => evento.date > currentDate)
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


}



   
    
