import { llamarJSON } from "./src/api.js";
import { imprimirTodasLasCards, imprimirCardsFiltradasPorPrecio } from "./src/funciones.js";
import { fechasImpresas } from "./src/formatoDeFechasImpreso.js";

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

// Trayendo variables del DOM.

let main = document.getElementsByClassName("main")[0];
let checkIn = document.getElementsByClassName("checkIn")[0];
let checkOut = document.getElementsByClassName("checkOut")[0];
let precioIngresado = document.getElementsByClassName("prices")[0];
let botonClear = document.getElementsByClassName("clear")[0];
let textoDinamico = document.getElementsByClassName("textoDinamico")[0];

// Estableciendo por defecto los valores del texto 
//dinámico.
let textoFiltroFechas = "";
textoDinamico.innerText = `All sizes hotels,${textoFiltroFechas} in all countries.`;



// Establecer las fechas mínimas de CheckIn.
// y de CheckOut.
// Estas no puede ser menor a la fecha de hoy.

let hoy = new Date();
let dd = String(hoy.getDate()).padStart(2, '0');
let mm = String(hoy.getMonth() + 1).padStart(2, '0');
let yyyy = hoy.getFullYear();
let fechaActual = yyyy + '-' + mm + '-' + dd;
checkIn.setAttribute("min", fechaActual);
checkOut.setAttribute("min", fechaActual);

// llamo a la función que imprime todas las cards por default.
imprimirTodasLasCards(main);

//AddEventListener para los cambios en los precios.

precioIngresado.addEventListener("change", e => {
  let precioIngresado = Number(e.target.value);
  if (precioIngresado === 1) {
    imprimirCardsFiltradasPorPrecio(main, precioIngresado);
  } else if (precioIngresado === 2) {
    imprimirCardsFiltradasPorPrecio(main, precioIngresado);
  } else if (precioIngresado === 3) {
    imprimirCardsFiltradasPorPrecio(main, precioIngresado);
  } else if (precioIngresado === 4) {
    imprimirCardsFiltradasPorPrecio(main, precioIngresado);
  } else {
    imprimirTodasLasCards(main);
  }
})

//AddEventListener para el boton clear.

botonClear.addEventListener("click", () => {

  imprimirTodasLasCards(main);
  checkIn.setAttribute("min", fechaActual);
  checkOut.setAttribute("min", fechaActual);
  checkIn.removeAttribute("max");
  checkOut.removeAttribute("max");
  checkIn.value = checkIn.defaultValue;
  checkOut.value = checkOut.defaultValue;
  precioIngresado.selectedIndex = 0
  textoFiltroFechas = "";
  textoDinamico.innerText = `All sizes hotels,${textoFiltroFechas} in all countries.`;
})

checkIn.addEventListener("change", (e) => {
  // si a checkout no se le ha ingresado un valor.
  if (checkOut.value.length === 0) {
    checkOut.setAttribute("min", e.target.value);
  } else {
    textoDinamico.innerText = `All sizes hotels${fechasImpresas(e.target.value, checkOut.value)} in all countries.`;
  }
})

checkOut.addEventListener("change", (e) => {
  // si a checkIn no se le ha ingresado un valor.
  if (checkIn.value.length === 0) {
    checkIn.setAttribute("max", checkOut.value);
  } else {
    textoDinamico.innerText = `All sizes hotels${fechasImpresas(checkIn.value, e.target.value)} in all countries.`;
  }
})