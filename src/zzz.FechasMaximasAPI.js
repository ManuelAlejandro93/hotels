async function llamarJSON() {
  let response = await fetch("https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels");
  let json = await response.json();
  return await json;
}

// CheckIn y CheckOut que devuelve la API.
async function comparandoFechas() {
  let arreglo = await llamarJSON();
  let fechasCheckInDeLaAPI = arreglo.map(e => e.availabilityFrom);
  let valorMaximoDeCheckIn = Math.max(...fechasCheckInDeLaAPI);
  let fechaCalendarioMaxDeCheckIn = new Date(valorMaximoDeCheckIn);
  console.log(fechaCalendarioMaxDeCheckIn);
  // fecha máxima del checkIn: Fri Jan 30 1970 19:00:00

  let fechasCheckOutDeLaAPI = arreglo.map(e => e.availabilityTo);
  let valorMaximoDeCheckOut = Math.max(...fechasCheckOutDeLaAPI);
  let fechaCalendarioMaxDeCheckOut = new Date(valorMaximoDeCheckOut);
  console.log(fechaCalendarioMaxDeCheckOut);
  // fecha máxima del checkOut: Mon Feb 09 1970 19:00:00
}

comparandoFechas();