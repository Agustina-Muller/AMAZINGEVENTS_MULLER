const crearcard = fcrearcard;
const checkdinamico = crearCheckboxes;
const filtro = filtradocompleto;

Data(home)

function home (events){
  fcrearcard (events, contenedorevento);

  checkdinamico(events);
  buscar.addEventListener('click', () => {
    filtro(events, textbuscar.value, 'name');
  
  });
  
  document.addEventListener('input', e => {
    if (e.target.classList.contains('category')) {
      filtro (events, textbuscar.value, 'name')
    }
  });

  
}



  













