let header = document.getElementsByClassName("header");


let contenedorDeHeader = document.createElement("div");
contenedorDeHeader.classList.add("contenedorDeHeader");
header[0].append(contenedorDeHeader);

let h1 = document.createElement("h1");
h1.classList.add("h1");
h1.innerHTML = "Book it!";
header[0].append(h1);

let contenedorFiltros = document.createElement("div");
contenedorFiltros.classList.add("contenedorFiltros");
header[0].append(contenedorFiltros);

let flexFiltros = document.createElement("div");
flexFiltros.classList.add("flexFiltros");
contenedorFiltros.append(flexFiltros);

let selectCountry = document.createElement("select");
selectCountry.classList.add("filtro", "selectCountry");
selectCountry.setAttribute("name", "selectCountry")
flexFiltros.append(selectCountry);

let optionallcountries = document.createElement("option");
optionallcountries.setAttribute("value", "allcountries");
optionallcountries.innerText = "All Countries";



let restoDeOpciones = `<option value="argentina">Argetina</option>
<option value="brasil">Brasil</option>
<option value="chile">Chile</option>
<option value="uruguay">Uruguay</option>`;

selectCountry.innerHTML += restoDeOpciones;

let restoDeFlexFiltro = `<option value="allcountries">All Countries</option>
<option value="argentina">Argetina</option>
<option value="brasil">Brasil</option>
<option value="chile">Chile</option>
<option value="uruguay">Uruguay</option>
</select>
<input class="filtro checkIn" type="date" />
<input class="filtro checkOut" type="date" />
<select class="filtro prices" name="selectPrice">
<option value="allPrices">AllPrices</option>
<option value="$">$</option>
<option value="$$">$$</option>
<option value="$$$">$$$</option>
<option value="$$$$">$$$$</option>
</select>
<select class="filtro sizes" name="selectSize">
<option value="allsizes">AllSizes</option>
<option value="small">Small</option>
<option value="medium">Medium</option>
<option value="large">Large</option>
</select>
<button class="clear">Clear</button>`;

flexFiltros.innerHTML = restoDeFlexFiltro;

let restoDeContenedorHeader = `
<div class="contenedorTexto">
<p class="textoFijo">We have found for you...</p>
<p class="textoDinamico">
All sizes hotels of all category prices, in all countries.
</p>
</div>`;

contenedorDeHeader.innerHTML += restoDeContenedorHeader;






