let baseurl = "http://localhost:8080";
let header = [];
let inicio = [];
let personajesInicio = [];
let arcos = [];
let opening = [];
let formulario = [];

function CargarPagina(){
    obtenerHeaderImg();
    obtenerHeaderT();
    obtenerInicio();
    obtenerPersonajesInicio();
    obtenerArcos();
    obtenerOpeningTitulo();
    obtenerOpening();
    obtenerPlaylist();
    obtenerGif();
    obtenerFormularioT();
    obtenerFormularioImg1();
    obtenerFormularioImg2();
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
        <a href=""><h3>${personajesInicio.boton_p}</h3></a>
        <hr>
    </div>
            `;
}

/*Funciones para los arcos */

function obtenerArcos(){
    fetch(baseurl + '/datos/arcos').then(res=>{
        res.json().then(json=>{
            arcos = json;
            imprimirArcos1();
            imprimirArcos2();
            imprimirArcos3();
            imprimirArcos4();
            imprimirArcostitulo();
        });
    });
}

function imprimirArcos1(){
    let contenedor = document.getElementById("personajesArcos1");

    if (arcos.length > 0) {
        contenedor.innerHTML += mapearArcos1(arcos[0]); // Toma solo el primer elemento
    }
}  

function mapearArcos1(arcos){
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

function imprimirArcos2(){
    let contenedor = document.getElementById("personajesArcos2");

    if (arcos.length > 0) {
        contenedor.innerHTML += mapearArcos2(arcos[1]); 
    }
}  

function mapearArcos2(arcos){
    return `
        <div class="cuadrito1-jiraiya">
        <h1>${arcos.titulo}</h1>
        <p>${arcos.resumen_arco}</p>
        <a href=""><button>${arcos.texto_boton}</button></a>
        </div>
        <img src="${arcos.imagen}" alt="">
        <div class="cuadrito2-jiraiya"></div>
        <div class="circulito1-jiraiya"></div>
    `;
}

function imprimirArcos3(){
    let contenedor = document.getElementById("personajesArcos3");

    if (arcos.length > 0) {
        contenedor.innerHTML += mapearArcos3(arcos[2]);
    }
}  

function mapearArcos3(arcos){
    return `
            <div class="cuadrito1-sasuke">
                <h1>${arcos.titulo}</h1>
                <p>${arcos.resumen_arco}</p>
                <a href=""><button>${arcos.texto_boton}</button></a>
            </div>
            <div class="cuadrito2-sasuke"></div>
            <img src="${arcos.imagen}" alt="" class="img">
    `;
}

function imprimirArcos4(){
    let contenedor = document.getElementById("personajesArcos4");

    if (arcos.length > 0) {
        contenedor.innerHTML += mapearArcos4(arcos[3]); 
    }
}  

function mapearArcos4(arcos){
    return `
        <div class="cuadrito1-madara">
        <h1>${arcos.titulo}</h1>
        <p>${arcos.resumen_arco}</p>
        <a href=""><button>${arcos.texto_boton}</button></a>
        </div>
        <img src="${arcos.imagen}" alt="">
        <div class="cuadrito2-madara"></div>
        <div class="circulito1-madara"></div>
    `;
}

function imprimirArcostitulo(){
    let contenedor = document.getElementById("titulo_arcos");

    if (arcos.length > 0) {
        contenedor.innerHTML += mapearTituloArcos(arcos[0]); // Toma solo el primer elemento
    }

}

function mapearTituloArcos(arcos){
    return ` <img src="${arcos.imagen_titulo}" alt="">
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
        contenedor.innerHTML += mapearOpeningTitulo(opening[0]); // Toma solo el primer elemento
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
        <a href="${opening.o_lista}"><li>${opening.o_lista_texto}</li></a>
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

    if (opening.length > 0) {
        contenedor.innerHTML += mapearPlaylist(opening[0]);
    }
}          

function mapearPlaylist(opening){
    return ` 
    <a href="${opening.playlist}"><button>${opening.playlist_texto}</button></a>

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
        contenedor.innerHTML += mapearGif(opening[0]); // Toma solo el primer elemento
    }
}          

function mapearGif(opening){
    return ` 
    <img class="grande" src="${opening.gif}" alt="">

            `;
}

/*Funciones para Formularios*/ 

function obtenerFormularioImg1(){
    fetch(baseurl + '/datos/formulario').then(res=>{
        res.json().then(json=>{
            formulario = json;
            imprimirFormularioImg1();
        });
    });
}

function imprimirFormularioImg1(){
    let contenedor = document.getElementById("formulario");

    if (formulario.length > 0) {
        contenedor.innerHTML += mapearFormularioImg1(formulario[0]); 
    }
}          

function mapearFormularioImg1(formulario){
    return ` 
    <img class="form-img" src="${formulario.form_img}" alt="">
            `;
}

function obtenerFormularioImg2(){
    fetch(baseurl + '/datos/formulario').then(res=>{
        res.json().then(json=>{
            formulario = json;
            imprimirFormularioImg2();
        });
    });
}

function imprimirFormularioImg2(){
    let contenedor = document.getElementById("form_img");

    if (formulario.length > 0) {
        contenedor.innerHTML += mapearFormularioImg2(formulario[1]); 
    }
}          

function mapearFormularioImg1(formulario){
    return ` 
    <img class="img-relleno" src="${formulario.form_img}" alt="">

            `;
}

function obtenerFormularioT(){
    fetch(baseurl + '/datos/formulario').then(res=>{
        res.json().then(json=>{
            formulario = json;
            imprimirFormularioT();
        });
    });
}

function imprimirFormularioT(){
    let contenedor = document.getElementById("form_datos");

    formulario.forEach(formulario=>{
        contenedor.innerHTML += mapearFormularioT(formulario);
    });
}          

function mapearFormularioT(formulario){
    return ` 
        <form action="">
            <h1>${formulario.form_texto}</h1>
            <label for="nombre">${formulario.form_nombre}</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre">
            <label for="email">${formulario.form_correo}</label>
            <input type="email" id="email" name="email" placeholder="Ingresa tu email">
            <label for="mensaje">${formulario.form_mens}</label>
            <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Escribe un mensaje"></textarea>
            <a href=""><button>${formulario.form_env}</button></a>
        </form>
            `;
}


/*Funcion para mapear el Footer */
function obtenerFooterEnlaces(){
    fetch(baseurl + '/datos/footer').then(res=>{
        res.json().then(json=>{
            footer = json;
            imprimirFooterEnlaces();
            imprimirEnlaceRapido();
            imprimirLogoNaruto();
            imprimirGifFooter();
            imprimirFooterDerechos();
        });
    });
}

function imprimirFooterEnlaces(){
    let contenedor = document.getElementById("footerEnlaces");

    footer.forEach(footer=>{
        contenedor.innerHTML += mapearFooterEnlaces(footer);
    });
}

function mapearFooterEnlaces(footer){
    return ` 
             <li><a href="${footer.footer_enlace}">${footer.footer_texto}</a></li>
            `;
}


function imprimirEnlaceRapido(){
    let contenedor = document.getElementById("enlacesRapidos");

    if (footer.length > 0) {
        contenedor.innerHTML += mapearEnlaceRapido(footer[1]); // Toma solo el segundo elemento
    }
}          

function mapearEnlaceRapido(footer){
    return ` 
    <h2>${footer.footer_texto}</h2>
            `;
}

function imprimirGifFooter(){
    let contenedor = document.getElementById("footerLogoNaruto");

    if (footer.length > 0) {
        contenedor.innerHTML += mapearLogoNaruto(footer[0]); // Toma solo el primer elemento
    }
}

function mapearLogoNaruto(footer){
    return ` 
        <img src = "${footer.footer_imagen}" alt="logo Naruto" class="footer-img">
            `;
}


function imprimirLogoNaruto(){
    let contenedor = document.getElementById("footerGif");

    if (footer.length > 0) {
        contenedor.innerHTML += mapearFooterGif(footer[6]);
    }
}

function mapearFooterGif(footer){
    return ` 
        <img src="${footer.footer_imagen}" alt="" class="footer-gif">
            `;
}

function imprimirFooterDerechos(){
    let contenedor = document.getElementById("footerDerechos");

    if (footer.length > 0) {
        contenedor.innerHTML += mapearFooterDerechos(footer[6]);
    }
}

function mapearFooterDerechos(footer){
    return ` 
        <p>${footer.footer_texto}</p>
            `;
}


document.body.onload = CargarPagina();