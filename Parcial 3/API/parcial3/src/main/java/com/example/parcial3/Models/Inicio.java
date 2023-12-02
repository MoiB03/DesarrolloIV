package com.example.parcial3.Models;

public class Inicio {
	private String i_titulo_img;
	private String i_titulo;
	private String inicio_img;
	private String i_texto;
    
    public Inicio() {
    }

    public Inicio(String i_titulo_img, String i_titulo, String inicio_img, String i_texto) {
        this.i_titulo_img = i_titulo_img;
        this.i_titulo = i_titulo;
        this.inicio_img = inicio_img;
        this.i_texto = i_texto;
    }
    
    public String getI_titulo_img() {
        return i_titulo_img;
    }
    public void setI_titulo_img(String i_titulo_img) {
        this.i_titulo_img = i_titulo_img;
    }
    public String getI_titulo() {
        return i_titulo;
    }
    public void setI_titulo(String i_titulo) {
        this.i_titulo = i_titulo;
    }
    public String getInicio_img() {
        return inicio_img;
    }
    public void setInicio_img(String inicio_img) {
        this.inicio_img = inicio_img;
    }
    public String getI_texto() {
        return i_texto;
    }
    public void setI_texto(String i_texto) {
        this.i_texto = i_texto;
    }
    
}
