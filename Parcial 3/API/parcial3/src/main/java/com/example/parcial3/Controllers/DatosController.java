package com.example.parcial3.Controllers;

import java.util.*;
import com.example.parcial3.Models.*;
import com.example.parcial3.Services.DatosDB;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DatosController {
    
    @CrossOrigin(origins = "http://127.0.0.1:5501")
    @GetMapping("/datos/header")
    public List<Header> ObtenerHeader(){
        return new DatosDB().ObtenerHeader();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5501")
    @GetMapping("/datos/arcos")
    public List<Arcos> ObtenerArcos(){
        return new DatosDB().ObtenerArcos();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5501")
    @GetMapping("/datos/footer")
    public List<Footer> ObtenerFooter(){
        return new DatosDB().ObtenerFooter();
    }

    @GetMapping("/datos/formulario")
    public List<Formulario> ObtenerFormulario(){
        return new DatosDB().ObtenerFormulario();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5501")
    @GetMapping("/datos/inicio")
    public List<Inicio> ObtenerInicio(){
        return new DatosDB().ObtenerInicio();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5501")
    @GetMapping("/datos/openings")
    public List<Openings> ObtenerOpenings(){
        return new DatosDB().ObtenerOpenings();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5501")
    @GetMapping("/datos/personajesInicio")
    public List<Personajes_Inicio> ObtenerPersonajes_Inicio(){
        return new DatosDB().ObtenerPersonajes_Inicio();
    }
}
