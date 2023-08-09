// EventListener para checkIn.
checkIn.addEventListener("change", async () => {
    // convierto la fecha del CheckIn a ms.
    let fechaCheckIn = (new Date(checkIn.value)).getTime();
    // Llamo el arreglo para trabajarlo. 
    let data = await llamarJSON()
  
    // El tiempo de checkIn debe ser mayor que 
    // el tiempo de disponibilidad de ingreso, para 
    // poder hacer la reservación.
  
    // ................................................................................... //
    let hotelesCheckInDisponibles = data.filter(hoteles => fechaCheckIn >= hoteles.availabilityFrom
    )
    if (hotelesCheckInDisponibles.length === data.length) {
      console.log("Todos los hoteles están disponibles.");
    }
  })
  
  // EventListener para checkOut.
  
  checkOut.addEventListener("change", async () => {
    // convierto la fecha del CheckOut a ms.
    let fechaCheckOut = (new Date(checkOut.value)).getTime();
    // Llamo el arreglo para trabajarlo. 
    let data = await llamarJSON()
  
    // la disponibilidad de checkout debe ser mayor o igual 
    // a la solicitada por el cliente si no, no hay posibilidad 
    // de salida. 
  
    let hotelesCheckOutDisponibles = data.filter(hoteles => fechaCheckOut <= hoteles.availabilityTo
    )
    // la cantidad de hoteles disponibles para graficar algo debe ser de 1 o más para renderizar algo.
    if (hotelesCheckOutDisponibles.length < 1) {
      console.log("No hay CheckOut disponible.");
    } else {
      console.log("Puedo graficar algo.");
    }
  })

  // Función que comprueba las fechas de checkIn
  // y las fechas de CheckOut


  // Establecer fecha mínima de CheckOut.
// la fecha del CheckOut no puede ser menor a la fecha de hoy.
checkOut.setAttribute("min", fechaActual);


// comparando la fecha del día de hoy con las fechas máxima de
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
// ....................................................... //