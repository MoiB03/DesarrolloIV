package com.example.parcial3.Controllers;

import java.util.*;
import com.example.parcial3.Models.*;
import com.example.parcial3.Services.DatosDB;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DatosController {
    
    @GetMapping("/datos/header")
    public List<Header> ObtenerHeader(){
        return new DatosDB().ObtenerHeader();
    }

    @GetMapping("/datos/arcos")
    public List<Arcos> ObtenerArcos(){
        return new DatosDB().ObtenerArcos();
    }

    @GetMapping("/datos/footer")
    public List<Footer> ObtenerFooter(){
        return new DatosDB().ObtenerFooter();
    }

    @GetMapping("/datos/formulario")
    public List<Formulario> ObtenerFormulario(){
        return new DatosDB().ObtenerFormulario();
    }

    @GetMapping("/datos/inicio")
    public List<Inicio> ObtenerInicio(){
        return new DatosDB().ObtenerInicio();
    }

    @GetMapping("/datos/openings")
    public List<Openings> ObtenerOpenings(){
        return new DatosDB().ObtenerOpenings();
    }

    @GetMapping("/datos/personajesInicio")
    public List<Personajes_Inicio> ObtenerPersonajes_Inicio(){
        return new DatosDB().ObtenerPersonajes_Inicio();
    }
}
