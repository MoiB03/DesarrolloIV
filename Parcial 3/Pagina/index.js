let baseurl = "http://localhost:8080";
let header = [];

function obtenerHeader(){
    fetch(baseurl + '/datos/header').then(res=>{
        res.json().then(json=>{
            header = json;
            imprimirheader();
        });
    });
}

function imprimirheader(){
    let contenedor = document.getElementById("encabezado");

    header.forEach(header=>{
        contenedor.innerHTML += mapearheader(header);
    });
}

function mapearheader(header){
    return `<ul>
                <li><a href="#">${header.h_texto}</a></li>
            </ul>`;
}