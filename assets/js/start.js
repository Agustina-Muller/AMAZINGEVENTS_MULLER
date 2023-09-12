let tabla1 = document.querySelector('#tbody1');
let tabla2 = document.querySelector('#tbody2');
let tabla3 = document.querySelector('#tbody3');

Data(tablas);


function tablas(events, currentDate) {
    
   tablaasistencia(events, tabla1);

   const eventosfiltradoup = events.filter(evento => evento.date > currentDate)
   tablaupcoming(eventosfiltradoup, tabla2)

   const eventosfiltradospast = events.filter(evento => evento.date <= currentDate);
    tablapast(eventosfiltradospast, tabla3)


};




