
import { Prueba, llamarJSON, conocerPais, conocerCiudad, conocerDescripcion, conocerNombre, conocerFoto, conocerPrecio, conocerRooms, conocerSlug } from "./src/api.js";

let mostrarTodasLAsImagenes = async () => {
    let arreglo = await llamarJSON();
    arreglo.forEach(element => {
        console.log(element.photo);
    });
}

mostrarTodasLAsImagenes()




