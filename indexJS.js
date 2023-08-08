import { Prueba, llamarJSON, conocerPais, conocerCiudad, conocerDescripcion, conocerNombre, conocerFoto, conocerPrecio, conocerRooms, conocerSlug } from "./src/api.js";

let header = document.getElementsByClassName("header")[0];

header.innerHTML = `
<div class="contenedorDeHeader">
        <h1 class="h1">Book it!</h1>
        <div class="contenedorFiltros">
          <div class="flexFiltros">
            <select class="filtro selectCountry" name="selectCountry">
              <option value="allcountries">All Countries</option>
              <option value="argentina">Argetina</option>
              <option value="brasil">Brasil</option>
              <option value="chile">Chile</option>
              <option value="uruguay">Uruguay</option>
            </select>
            <input class="filtro checkIn" type="date" />
            <input class="filtro checkOut" type="date" />
            <select class="filtro prices" name="selectPrice">
              <option value="0">AllPrices</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
            <select class="filtro sizes" name="selectSize">
              <option value="allsizes">AllSizes</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <button class="clear">Clear</button>
          </div>
        </div>
        <div class="contenedorTexto">
          <p class="textoFijo">We have found for you...</p>
          <p class="textoDinamico">
            All sizes hotels of all category prices, in all countries.
          </p>
        </div>
      </div>`;

// Trayendo CheckIn y checkOut.
let checkIn = document.getElementsByClassName("checkIn")[0];
let checkOut = document.getElementsByClassName("checkOut")[0];

// Establecer fecha mínima de CheckIn.

let hoy = new Date();
let dd = String(hoy.getDate()).padStart(2, '0');
let mm = String(hoy.getMonth() + 1).padStart(2, '0');
let yyyy = hoy.getFullYear();
let fechaActual = yyyy + '-' + mm + '-' + dd;
checkIn.setAttribute("min", fechaActual);

// Establecer fecha mínima de CheckOut.
checkOut.setAttribute("min", fechaActual);

// EventListener para checkIn.
checkIn.addEventListener("change", async () => {
  // convierto la fecha del CheckIn a ms.
  let fechaCheckIn = (new Date(checkIn.value)).getTime();
  // Llamo el arreglo para trabajarlo. 
  let data = await llamarJSON()

  let hotelesCheckInDisponibles = data.filter(hoteles => fechaCheckIn > hoteles.availabilityFrom
  )
  if (hotelesCheckInDisponibles.length > 0) {
    console.log("No se cumplen las condiciones de CheckIn para graficar algo.");
  } else {
    console.log("Puedo graficar algo.");
  }
})

// EventListener para checkOut.

checkOut.addEventListener("change", async () => {
  // convierto la fecha del CheckOut a ms.
  let fechaCheckOut = (new Date(checkOut.value)).getTime();
  // Llamo el arreglo para trabajarlo. 
  let data = await llamarJSON()
  let hotelesCheckOutDisponibles = data.filter(hoteles => fechaCheckOut > hoteles.availabilityTo
  )

  if (hotelesCheckOutDisponibles.length > 0) {
    console.log("No se cumplen las condiciones de CheckOut para graficar algo.");
  } else {
    console.log("Puedo graficar algo.");
  }
})


// traigo el filtro (tipo: select) de los precios.
let precioIngresado = document.getElementsByClassName("prices")[0];

//Añado un EventoListener al filtro precios.

precioIngresado.addEventListener("change", async (e) => {
  let selectValue = Number(e.target.value);
  let data = await llamarJSON()
  let hotelesConPrecioSelecionado;

  if (selectValue === 1) {
    hotelesConPrecioSelecionado = data.filter(n => n.price === selectValue);
    console.log(hotelesConPrecioSelecionado);

  } if (selectValue === 2) {
    hotelesConPrecioSelecionado = data.filter(n => n.price === selectValue);
    console.log(hotelesConPrecioSelecionado);

  } if (selectValue === 3) {
    hotelesConPrecioSelecionado = data.filter(n => n.price === selectValue);
    console.log(hotelesConPrecioSelecionado);

  } if (selectValue === 4) {
    hotelesConPrecioSelecionado = data.filter(n => n.price === selectValue);
    console.log(hotelesConPrecioSelecionado);
  } if (selectValue === 0) {
    hotelesConPrecioSelecionado = data;
    console.log(hotelesConPrecioSelecionado);
  }
}
);

// traigo a main.

let main = document.getElementsByClassName("main")[0];

// imprimo en 1 card un background con una foto de un hotel.

async function imprimirTodasLasCards() {
  let arreglo = await llamarJSON();
  arreglo.forEach(e => {
    let card = document.createElement("div");
    card.classList.add("divMain");
    card.style.backgroundImage = `url("${e.photo}")`;
    let h2 = document.createElement("h2");
    h2.classList.add("h2");
    h2.innerText = e.name;

    let contenedorArriba = document.createElement("div");
    contenedorArriba.classList.add("contenedorArriba");

    let p = document.createElement("p");
    p.classList.add("p");
    p.innerText = e.country;

    let img = document.createElement("img");
    img.classList.add("img");

    if (e.country.toLowerCase() === "argentina") {
      img.setAttribute("src", "./assets/banderaArgentina.png");
    } else if (e.country.toLowerCase() === "chile") {
      img.setAttribute("src", "./assets/banderaChile.jpg");
    } else if (e.country.toLowerCase() === "brasil") {
      img.setAttribute("src", "./assets/banderaDeBrasil.jpg");
    } else if (e.country.toLowerCase() === "uruguay") {
      img.setAttribute("src", "./assets/banderaUruguay.jpg");
    }

    contenedorArriba.append(img, p);

    let contenedorAbajo = document.createElement("div");
    contenedorAbajo.classList.add("contenedorAbajo");

    let pAbajo = document.createElement("p");
    pAbajo.classList.add("pAbajo");
    pAbajo.innerText = `${e.rooms} Rooms`;
    
    let precioAbajo = document.createElement("p");
    precioAbajo.classList.add("precioAbajo");

    if (e.price === 1) {
      precioAbajo.innerText = "$";
    } else if (e.price === 2) {
      precioAbajo.innerText = "$$";
    } else if (e.price === 3) {
      precioAbajo.innerText = "$$$";
    } else if (e.price === 4) {
      precioAbajo.innerText = "$$$$";
    } 



    contenedorAbajo.append(pAbajo,precioAbajo);


    card.append(h2, contenedorArriba, contenedorAbajo);

    main.appendChild(card);
  });
}

imprimirTodasLasCards();