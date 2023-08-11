// let mostrarTodasLAsImagenes = async () => {
//     let arreglo = await llamarJSON();
//     arreglo.forEach(element => {
//         console.log(element.photo);
//     });
// }

// mostrarTodasLAsImagenes()



//Evento de CheckIn.
// checkIn.addEventListener("change", () => {
//     let fechaCheckIn = (new Date(checkIn.value)).getTime();
//     let hoy = (new Date()).getTime()

//   })


// Utilizar valores que están dentro del Json (arreglo esperado)

// checkIn.addEventListener("change", async () => {
//     let fechaCheckIn = (new Date(checkIn.value)).getTime();
//     console.log(fechaCheckIn);
//     let ver = await llamarJSON()
//     setTimeout(() => {
//       ver.forEach(element => {
//         console.log(element.name);
//       });
//     }, 2000);
//   })


// arreglando por aquí la impresión de una fecha.

// let fechaActual = "2023-08-11";
// let ingreso = fechaActual;
// let salida = fechaActual;

// let diaCheckIn = (ingreso.split("-"))[2];
// let diaCheckOut = (salida.split("-"))[2];


//Organizando el texto dinámico por los filtros.

// let textoFiltroFechas = "";
// let textoFiltroPrecios = "All prices";
// let textoDinamico = `All sizes hotels of ${textoFiltroPrecios},${textoFiltroFechas} in all countries.`;

// console.log(textoDinamico);