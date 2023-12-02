let baseurl = "http://localhost:8080";
let header = [];
let inicio = [];


function CargarPagina(){
    obtenerHeaderImg();
    obtenerHeaderT();

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

function obtenerInicio1(){
    fetch(baseurl + '/datos/inicio').then(res=>{
        res.json().then(json=>{
            inicio = json;
            imprimirinicio1();
        });
    });
}

function imprimirinicio1(){
    let contenedor = document.getElementById("inicio");

    for(let i = 0; i < inicio.length; i++){
        if(inicio[i] = inicio[0]){
            contenedor.innerHTML += mapearinicio1(inicio[0]); // Toma solo el primer elemento
        }
        if(inicio[i] = inicio[1]){
            contenedor.innerHTML += mapearinicio1(inicio[1]); // Toma solo el segundo elemento
        }

    }
}   
        

function mapearinicio1(inicio){
        if(inicio = ""){

        }
    return ` 
    <img class="naruto-rasengan" src="${inicio.i_img}" alt="Naruto haciendo Rasengan">
    <div class="container-inicio">
    <h2>${inicio.i_texto}</h2>
    <img src="${inicio.i_img}" alt="Logo de Naruto en grande">
    <a href="">
        <button>${inicio.i_texto}</button>
    </a>
    </div>
            `;
}

/*2*/ 
function obtenerInicio2(){
    fetch(baseurl + '/datos/inicio').then(res=>{
        res.json().then(json=>{
            inicio = json;
            imprimirinicio2();
        });
    });
}

function imprimirinicio2(){
    let contenedor = document.getElementById("inicio_2");

    if (inicio.length > 0) {
        contenedor.innerHTML += mapearinicio2(inicio[1]); // Toma solo el segundo elemento
    }
}

function mapearinicio2(inicio){
    return ` 
    <img src="${inicio.i_img}" alt="Logo de Naruto en grande">
    <a href="">
        <button>${inicio.i_texto}</button>
    </a>
    </div>
            `;
}


document.body.onload = CargarPagina();


/*Funciones para los arcos */

