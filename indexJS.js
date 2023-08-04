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