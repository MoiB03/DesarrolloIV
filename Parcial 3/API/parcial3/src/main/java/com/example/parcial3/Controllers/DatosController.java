package com.example.parcial3.Controllers;

import java.util.*;
import com.example.parcial3.Models.*;
import com.example.parcial3.Services.DatosDB;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DatosController {
    
    @GetMapping("/datos/all")
    public List<Header> ObtenerHeader(){
        return new DatosDB().ObtenerHeader();
    }
}
