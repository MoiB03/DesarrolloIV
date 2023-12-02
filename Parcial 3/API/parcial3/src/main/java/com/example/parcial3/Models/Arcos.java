package com.example.parcial3.Models;

public class Arcos {
    private String id_arco;
    private String titulo;
    private String resumen_arco;
    private String imagen;
    private String texto_boton;
    private String imagen_titulo;

    
    public Arcos() {
    }

    public Arcos(String id_arco, String titulo, String resumen_arco, String imagen, String texto_boton,
            String imagen_titulo) {
        this.id_arco = id_arco;
        this.titulo = titulo;
        this.resumen_arco = resumen_arco;
        this.imagen = imagen;
        this.texto_boton = texto_boton;
        this.imagen_titulo = imagen_titulo;
    }
    
    public String getId_arco() {
        return id_arco;
    }
    public void setId_arco(String id_arco) {
        this.id_arco = id_arco;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getResumen_arco() {
        return resumen_arco;
    }
    public void setResumen_arco(String resumen_arco) {
        this.resumen_arco = resumen_arco;
    }
    public String getImagen() {
        return imagen;
    }
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    public String getTexto_boton() {
        return texto_boton;
    }
    public void setTexto_boton(String texto_boton) {
        this.texto_boton = texto_boton;
    }
    public String getImagen_titulo() {
        return imagen_titulo;
    }
    public void setImagen_titulo(String imagen_titulo) {
        this.imagen_titulo = imagen_titulo;
    }
    


}
