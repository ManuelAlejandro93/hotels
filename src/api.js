async function Prueba() {
    let response = await fetch("https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels");
    let json = await response.json();
    console.log(json);
}

async function llamarJSON() {
    let response = await fetch("https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels");
    let json = await response.json();
    return await json;
}

async function conocerPais(n) {
    let json = await llamarJSON();
    let pais = await json[n].country;
    console.log(pais);
}

async function conocerCiudad(n) {
    let json = await llamarJSON();
    let ciudad = await json[n].city;
    console.log(ciudad);
}

async function conocerDescripcion(n) {
    let json = await llamarJSON();
    let descripcion = await json[n].description;
    console.log(descripcion);
}

async function conocerNombre(n) {
    let json = await llamarJSON();
    let nombre = await json[n].name;
    console.log(nombre);
}

async function conocerFoto(n) {
    let json = await llamarJSON();
    let foto = await json[n].photo;
    console.log(foto);
}

async function conocerPrecio(n) {
    let json = await llamarJSON();
    let precio = await json[n].price;
    console.log(precio);
}

async function conocerRooms(n) {
    let json = await llamarJSON();
    let rooms = await json[n].rooms;
    console.log(rooms);
}

async function conocerSlug(n) {
    let json = await llamarJSON();
    let slug = await json[n].slug;
    console.log(slug);
}


export { Prueba, llamarJSON, conocerPais, conocerCiudad, conocerDescripcion, conocerNombre, conocerFoto, conocerPrecio, conocerRooms, conocerSlug }

