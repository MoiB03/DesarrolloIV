package com.example.parcial3.Models;

public class Personajes_Inicio {
    private String id_personaje;
	private String titulo_p;
	private String imagen_p;
	private String boton_p;

    public Personajes_Inicio() {
    }

    public Personajes_Inicio(String id_personaje, String titulo_p, String imagen_p, String boton_p) {
        this.id_personaje = id_personaje;
        this.titulo_p = titulo_p;
        this.imagen_p = imagen_p;
        this.boton_p = boton_p;
    }
    
    public String getId_personaje() {
        return id_personaje;
    }
    public void setId_personaje(String id_personaje) {
        this.id_personaje = id_personaje;
    }
    public String getTitulo_p() {
        return titulo_p;
    }
    public void setTitulo_p(String titulo_p) {
        this.titulo_p = titulo_p;
    }
    public String getImagen_p() {
        return imagen_p;
    }
    public void setImagen_p(String imagen_p) {
        this.imagen_p = imagen_p;
    }
    public String getBoton_p() {
        return boton_p;
    }
    public void setBoton_p(String boton_p) {
        this.boton_p = boton_p;
    }

    

}
