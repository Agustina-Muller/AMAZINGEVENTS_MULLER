const creartarjeta = fcrearcard;
const checkdinamico = crearCheckboxes;
const filtro = filtradocompleto;
Data(eventosPasados)

function eventosPasados (events, currentDate){
    const eventosfiltrados = events.filter(evento => evento.date <= currentDate);

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
}

