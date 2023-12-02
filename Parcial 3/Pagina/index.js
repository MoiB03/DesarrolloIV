let baseurl = "http://localhost:8080";
let header = [];
let inicio = [];
let personajesInicio = [];
let arcos = [];
let opening = [];

function CargarPagina(){
    obtenerHeaderImg();
    obtenerHeaderT();
    obtenerInicio();
    obtenerPersonajesInicio();
    obtenerArcos();
}

/*Funciones para el Header*/

function obtenerHeaderT(){
    fetch(baseurl + '/datos/header').then(res=>{
        res.json().then(json=>{
            header = json;
            imprimirheaderT();
        });
    });
}

function imprimirheaderT(){
    let contenedor = document.getElementById("encabezado_t");

    header.forEach(header=>{
        contenedor.innerHTML += mapearheaderT(header);
    });
}

function mapearheaderT(header){
    return ` 
                <li><a href="${header.h_enlace}">${header.h_texto}</a></li>
            `;
}

function obtenerHeaderImg(){
    fetch(baseurl + '/datos/header').then(res=>{
        res.json().then(json=>{
            header = json;
            imprimirheaderImg();
        });
    });
}

function imprimirheaderImg(){
    let contenedor = document.getElementById("encabezado_img");

    if (header.length > 0) {
        contenedor.innerHTML += mapearheaderImg(header[0]); // Toma solo el primer elemento
    }

}

function mapearheaderImg(header){
    return ` <img src="${header.h_img}" alt="logo Naruto" class="logo">
    `;
}

/*Funciones para el Inicio*/

function obtenerInicio(){
    fetch(baseurl + '/datos/inicio').then(res=>{
        res.json().then(json=>{
            inicio = json;
            imprimirinicio();
        });
    });
}

function imprimirinicio(){
    let contenedor = document.getElementById("inicio_m");

    inicio.forEach(inicio=>{
        contenedor.innerHTML += mapearinicio(inicio);
    });
}   
        

function mapearinicio(inicio){
    return ` 
    <img class="naruto-rasengan" src="${inicio.i_titulo_img}" alt="Naruto haciendo Rasengan">
    <div class="container-inicio">
    <h2>${inicio.i_titulo}</h2>
    <img src="${inicio.inicio_img}" alt="Logo de Naruto en grande">
    <a href="">
        <button>${inicio.i_texto}</button>
    </a>
    </div>
            `;
}

/*Funciones para Personajes_Inicio*/

function obtenerPersonajesInicio(){
    fetch(baseurl + '/datos/personajesInicio').then(res=>{
        res.json().then(json=>{
            personajesInicio = json;
            imprimirPersonajesInicio();
        });
    });
}

function imprimirPersonajesInicio(){
    let contenedor = document.getElementById("p_inicio");

    personajesInicio.forEach(personajesInicio=>{
        contenedor.innerHTML += mapearPersonajesInicio(personajesInicio);
    });
}          

function mapearPersonajesInicio(personajesInicio){
    return ` 
    <div class="preview-personaje">
        <img src="${personajesInicio.imagen_p}" alt="">
        <h2>${personajesInicio.titulo_p}</h2>
        <a href="">${personajesInicio.boton_p}</a>
        <hr>
    </div>
            `;
}

/*Funciones para los arcos */

function obtenerArcos(){
    fetch(baseurl + '/datos/arcos').then(res=>{
        res.json().then(json=>{
            arcos = json;
            imprimirArcos();
            imprimirArcostitulo();
        });
    });
}

function imprimirArcos(){
    let contenedor = document.getElementById("personajesArcos");

    arcos.forEach(arcos=>{
        contenedor.innerHTML += mapearArcos(arcos);
    });
}  

function mapearArcos(arcos){
    return `
            <div class="cuadrito1">
                <h1>${arcos.titulo}</h1>
                <p>${arcos.resumen_arco}</p>
                <a href=""><button>${arcos.texto_boton}</button></a>
            </div>
            <div class="cuadrito2"></div>
            <img src="${arcos.imagen}" alt="" class="img">
    `;
}

function imprimirArcostitulo(){
    let contenedor = document.getElementById("titulo_arcos");

    if (arcos.length > 0) {
        contenedor.innerHTML += mapearTituloArcos(arcos[0]); // Toma solo el primer elemento
    }

}

function mapearTituloArcos(arcos){
    return ` <img src="${arcos.imagen}" alt="">
    `;
}


/*Funciones para Opening*/ 

/*Funcion para mapear el primer titulo*/ 
function obtenerOpeningTitulo(){
    fetch(baseurl + '/datos/openings').then(res=>{
        res.json().then(json=>{
            opening = json;
            imprimirOpeningTitulo();
        });
    });
}

function imprimirOpeningTitulo(){
    let contenedor = document.getElementById("op_titulo");

    if (opening.length > 0) {
        contenedor.innerHTML += mapearheaderImg(opening[0]); // Toma solo el primer elemento
    }
}          

function mapearOpeningTitulo(opening){
    return ` 
    <img class="opening" src="${opening.o_img}" alt="">
            `;
}

/*Funcion para mapear la lista*/ 
function obtenerOpening(){
    fetch(baseurl + '/datos/openings').then(res=>{
        res.json().then(json=>{
            opening = json;
            imprimirOpening();
        });
    });
}

function imprimirOpening(){
    let contenedor = document.getElementById("op_lista");

    opening.forEach(opening=>{
        contenedor.innerHTML += mapearOpening(opening);
    });
}          

function mapearOpening(opening){
    return ` 
        <a href="${opening.o_img}"><li>${opening.o_texto}</li></a>
        <a href="${opening.o_img}"><li>${opening.o_texto}</li></a>
        <a href="${opening.o_img}"><li>${opening.o_texto}</li></a>
            `;
}

/*Función para mapear playlist*/ 

function obtenerPlaylist(){
    fetch(baseurl + '/datos/openings').then(res=>{
        res.json().then(json=>{
            opening = json;
            imprimirPlaylist();
        });
    });
}

function imprimirPlaylist(){
    let contenedor = document.getElementById("playlist");

    opening.forEach(opening=>{
        contenedor.innerHTML += mapearPlaylist(opening);
    });
}          

function mapearPlaylist(opening){
    return ` 
        <a href="${opening.o_img}"><li>${opening.o_texto}</li></a>
        <a href="${opening.o_img}"><li>${opening.o_texto}</li></a>
        <a href="${opening.o_img}"><li>${opening.o_texto}</li></a>
            `;
}


/*Funcion para mapear el gif*/ 
function obtenerGif(){
    fetch(baseurl + '/datos/openings').then(res=>{
        res.json().then(json=>{
            opening = json;
            imprimirGif();
        });
    });
}

function imprimirGif(){
    let contenedor = document.getElementById("gif");

    if (opening.length > 0) {
        contenedor.innerHTML += mapearGif(opening[5]); // Toma solo el primer elemento
    }
}          

function mapearGif(opening){
    return ` 
    <img class="opening" src="${opening.o_img}" alt="">
            `;
}












document.body.onload = CargarPagina();