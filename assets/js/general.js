const data = {
    currentDate: "2023-01-01",
    events: [
      {
        _id: "639c723b992482e5f2834be9",
        name: "Collectivities Party",
        image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        date: "2022-12-12",
        description:
          "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        assistance: 42756,
        price: 5,
        __v: 0,
      },
      {
        _id: "639c723b992482e5f2834beb",
        name: "Korean style",
        image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        date: "2023-08-12",
        description:
          "Enjoy the best Korean dishes, with international chefs and awesome events.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        price: 10,
        __v: 0,
        estimate: 42756,
      },
      {
        _id: "639c723c992482e5f2834bed",
        name: "Jurassic Park",
        image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        date: "2022-11-02",
        description:
          "Let's go meet the biggest dinosaurs in the paleontology museum.",
        category: "Museum",
        place: "Field",
        capacity: 82000,
        price: 15,
        __v: 0,
        assistance: 65892,
      },
      {
        _id: "639c723c992482e5f2834bef",
        name: "Parisian Museum",
        image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        date: "2023-11-02",
        description:
          "A unique tour in the city of lights, get to know one of the most iconic places.",
        category: "Museum",
        place: "Paris",
        capacity: 8200,
        estimate: 8200,
        price: 3500,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf1",
        name: "Comicon",
        image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        date: "2022-02-12",
        description:
          "For comic lovers, all your favourite characters gathered in one place.",
        category: "Costume Party",
        place: "Room C",
        capacity: 120000,
        assistance: 110000,
        price: 54,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf3",
        name: "Halloween Night",
        image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        date: "2023-02-12",
        description: "Come with your scariest costume and win incredible prizes.",
        category: "Costume Party",
        place: "Room C",
        capacity: 12000,
        estimate: 9000,
        price: 12,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf5",
        name: "Metallica in concert",
        image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        date: "2023-01-22",
        description: "The only concert of the most emblematic band in the world.",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        estimate: 138000,
        price: 150,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf7",
        name: "Electronic Fest",
        image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        date: "2022-01-22",
        description:
          "The best national and international DJs gathered in one place.",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        assistance: 110300,
        price: 250,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bf9",
        name: "10K for life",
        image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        date: "2022-03-01",
        description: "Come and exercise, improve your health and lifestyle.",
        category: "Race",
        place: "Soccer field",
        capacity: 30000,
        assistance: 25698,
        price: 3,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bfb",
        name: "15K NY",
        image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
        date: "2023-03-01",
        description:
          "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        category: "Race",
        place: "New York",
        capacity: 3000000,
        price: 3,
        __v: 0,
        estimate: 2569800,
      },
      {
        _id: "639c723d992482e5f2834bfd",
        name: "School's book fair",
        image: "https://i.postimg.cc/Sst763n6/book1.jpg",
        date: "2023-10-15",
        description: "Bring your unused school book and take the one you need.",
        category: "Book Exchange",
        place: "Room D1",
        capacity: 150000,
        estimate: 123286,
        price: 1,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bff",
        name: "Just for your kitchen",
        image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
        date: "2022-11-09",
        description:
          "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        category: "Book Exchange",
        place: "Room D6",
        capacity: 130000,
        assistance: 90000,
        price: 100,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834c01",
        name: "Batman",
        image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
        date: "2022-3-11",
        description: "Come see Batman fight crime in Gotham City.",
        category: "Cinema",
        place: "Room D1",
        capacity: 11000,
        assistance: 9300,
        price: 225,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834c03",
        name: "Avengers",
        image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
        date: "2023-10-15",
        description:
          "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        category: "Cinema",
        place: "Room D1",
        capacity: 9000,
        estimate: 9000,
        price: 250,
        __v: 0,
      },
    ],  
};



let textbuscar = document.querySelector('input[id=tbuscar]');
let buscar = document.querySelector('button[id=buscar]');
let contenedorevento = document.getElementById('contenedorevento');
let contenedordatalles = document.getElementById ('contenedordetallado');



let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing';


async function getDataFromApi() {
  try {
    let respuesta = await fetch(urlApi); 
    let apiData = await respuesta.json();
    return apiData;
  } catch (error) {
    console.log(error);
    return null; 
  }
}

async function Data(callback){
 try {
    let apiData = await getDataFromApi(); 
    const events = apiData ? apiData.events : data.events;
    const currentDate = apiData ? apiData.currentDate : data.currentDate;
    
    //console.log(events);
    //console.log(currentDate);
  
    callback(events, currentDate )
    
  } catch (error) {
   console.log(error)
   
  }
  
};







function fcrearcard(array,contenedorevento){
  let re = ""
  array.forEach( evento => {
    re += `
    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
      <div class="card h-100">
        <img src="${evento.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <div id="dh">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
          </div>
          <div class="pricecard">
            <p class="pf">Price: ${evento.price}</p>
            <a href="./details.html?id=${evento._id}" class="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
    </div>
  `;
  contenedorevento.innerHTML = re
    
  });
};

function crearCheckboxes(array) {
  const categoriasdeeventos = array.map(evento => evento.category);

  const categoriasUnicas = categoriasdeeventos.reduce((categoriasUnicas, categoria) => {
    if (!categoriasUnicas.includes(categoria)) {
      categoriasUnicas.push(categoria);
    }
    return categoriasUnicas;
  }, []);

  let checks = "";
  categoriasUnicas.forEach(categoria => {
    checks += `
      <label>
        <input type="checkbox" id="checkboxs" class="category"  name="categoria" value="${categoria}">
        <span>${categoria}</span>
      </label>
    `;
   
  });

   document.getElementById('contcheck').innerHTML = checks;
};

function filtradocompleto (array, criterio, campo) {
  let busqueda = criterio.toLowerCase();
  let filtro = array.filter(item => item[campo].toLowerCase().includes(busqueda));
  let cateve = document.querySelectorAll('.category');
  let chequeados = [];
  for( input of cateve){
    if (input.checked){
      chequeados.push(input.value);
    } 
      
  }
  if (chequeados.length > 0){
    filtro = filtro.filter ( evento => chequeados.includes(evento.category));
  } 
  if (filtro.length > 0){
   fcrearcard(filtro, contenedorevento);
  }else {
    contenedorevento.innerHTML = `
      <p class="card-title" id="resultado">No results found! Please try again. :(</p>
      <div class="d-grid gap-2 col-6 mx-auto" >
      <button class="btn btn-primary mx-auto btn-lg" type="button" onclick="window.location.reload()">Return.</button>
      <div>
    `;
  }
  
}



function detalles(array) {
  
  console.log([document])
  const queryString = document.location.search;
  console.log(queryString)
  const parametros = new URLSearchParams(queryString);
  console.log(parametros)
  const di = parseInt(parametros.get("id"));
  console.log(di)

  let eventosdetallado = array.map(evento =>{
    let aux= {}
    aux.name = evento.name
    aux.description = evento.description
    aux.fecha = evento.date
    aux.imagen = evento.image
    aux.id = evento._id
    aux.categoria = evento.category
    aux.lugar = evento.place
    aux.capacidad = evento.capacity
    aux.estimado = evento.estimate
    aux.asistencia = evento.assistance
    aux.precio = evento.price
    return aux
  });
  console.log(eventosdetallado)

  const eventoDetalle = eventosdetallado.find(evento => evento.id === di);
  console.log(eventoDetalle)

  

  if (eventoDetalle) {
    const variable = eventoDetalle.estimado !== undefined ? `Estimate: ${eventoDetalle.estimado}` : `Asistance: ${eventoDetalle.asistencia}`;

    const tarjetaDetalle = `
    <div class="card mb-3 d-flex" id="cart">
      <div class="row g-0">
        <div class="col-12 col-sm-1 col-md-3 col-xl-4" id="sell">
          <img src="${eventoDetalle.imagen}" alt="Imagen del evento" class="img-fluid">
        </div>
        <div class="col-12 col-sm-1 col-md-3 col-xl-4">
          <div class="card-body" id="dp">
            <h5 class="card-title">${eventoDetalle.name}</h5>
            <p class="card-text">Category: ${eventoDetalle.categoria}</p>
            <p class="card-text">Date: ${eventoDetalle.fecha}</p>
            <p class="card-text">${eventoDetalle.description}</p>
            <p class="card-text">Price: ${eventoDetalle.precio}</p>
            <p class="card-text"><small class="text-muted">Place: ${eventoDetalle.lugar}</small></p>
            <p class="card-text"><small class="text-muted">Capacity: ${eventoDetalle.capacidad} - ${variable}</small></p>
          </div>
        </div>
      </div>
    </div>
   `;
   contenedordatalles.innerHTML = tarjetaDetalle;
  }
};




function tablaasistencia(array, contenedor) {
  let tbodyhtml = "";

  for (let x = 0; x < 7; x++) {
    const eventosMayorPorcentajeAsistencia = EventosMayorPromedio(array);
    const eventoMenorPorcentajeAsistencia = MenorPromedio(array);
    const eventoMayorCapacidad = MayorCapacidad(array);

    tbodyhtml += `<tr>
                    <td>${eventosMayorPorcentajeAsistencia[x].name} with an average attendance rate of ${eventosMayorPorcentajeAsistencia[x].promedioAsistencia}%</td>
                    <td>${eventoMenorPorcentajeAsistencia[x].name} with an average attendance rate of ${eventoMenorPorcentajeAsistencia[x].promedioAsistencia}%</td>
                    <td>${eventoMayorCapacidad[x].name}  with a capacity:  ${(eventoMayorCapacidad[x].capacity).toLocaleString()}</td>
                  </tr>`;
  }

  contenedor.innerHTML = tbodyhtml;
}



function EventosMayorPromedio(array) {
  const eventosConPromedios = array.map(evento => {
      const promedioAsistencia = Math.ceil(((evento.estimate !== undefined ? evento.estimate : evento.assistance) / evento.capacity) * 100);
      return {
          ...evento,
          promedioAsistencia: promedioAsistencia, 
      };
  });

  const eventosOrdenados = eventosConPromedios.sort((a, b) => b.promedioAsistencia - a.promedioAsistencia);
  //console.log(eventosOrdenados)
  return eventosOrdenados;
};


function MenorPromedio(array) {
  const eventosConPromedios = array.map(evento => {
      const promedioAsistencia = Math.ceil(((evento.estimate !== undefined ? evento.estimate : evento.assistance) / evento.capacity) * 100);
      return {
          ...evento,
          promedioAsistencia: promedioAsistencia, 
      };
  });

  const eventosOrdenados = eventosConPromedios.sort((a, b) => a.promedioAsistencia - b.promedioAsistencia);
  //console.log(eventosOrdenados)
  return eventosOrdenados;

};

function MayorCapacidad(array) {
 
  const eventosOrdenados = array.slice().sort((a, b) => b.capacity - a.capacity);
 
  //console.log(eventosOrdenados);
  return eventosOrdenados;
};



function categoriasunicas(array) {
 
  let categoriasUnicas = [];

  for (const evento of array) {
    const categoria = evento.category;

    if (!categoriasUnicas.includes(categoria)) {
      categoriasUnicas.push(categoria);
    }
  }

  console.log(categoriasUnicas);
  return categoriasUnicas;
};
  
function tablaupcoming(array, contenedor){
  let tbodyhtml = "";
  let eventoscate;
  let ingresos;
  let Porcentajeasistencia;
  const catearray = categoriasunicas(array)
  catearray.forEach (cate => {
    eventoscate = array.filter(evento => evento.category === cate)
  
    ingresos = sumadeingresosxcategoria(eventoscate);
    Porcentajeasistencia= porcentajeasistencia(eventoscate);

    tbodyhtml += `<tr>
                    <td>${cate} </td>
                    <td>${ingresos} </td>
                    <td>${Porcentajeasistencia}%  </td>
                  </tr>`;
  
  
   })
    contenedor.innerHTML = tbodyhtml;
};

function sumadeingresosxcategoria(array){
    let ingreso = 0 ;
    array.forEach(evento => ingreso += evento.price * (evento.estimate !== undefined ? evento.estimate : evento.assistance));
    return ingreso.toLocaleString();

  };

function porcentajeasistencia(array){
    let asistencia = 0;
    let capacidad = 0;
    
    array.forEach(evento => {capacidad += evento.capacity
       asistencia += (evento.estimate !== undefined ? evento.estimate : evento.assistance)})
    
    return Math.ceil((asistencia/ capacidad)*100)
    //return Math.ceil(((evento.estimate !== undefined ? evento.estimate : evento.assistance)/ evento.capacity) * 100);
};

function tablapast(array, contenedor){
  let tbodyhtml = "";
  let eventoscate;
  let ingresos;
  let Porcentajeasistencia;
  const catearray = categoriasunicas(array)
  catearray.forEach (cate => {
    eventoscate = array.filter(evento => evento.category === cate)
  
    ingresos = sumadeingresosxcategoria(eventoscate);
    Porcentajeasistencia= porcentajeasistencia(eventoscate);

    tbodyhtml += `<tr>
                    <td>${cate} </td>
                    <td>${ingresos} </td>
                    <td>${Porcentajeasistencia}% </td>
                  </tr>`;
  
  
   })
    contenedor.innerHTML = tbodyhtml;
};





  
   
    
  
  













































