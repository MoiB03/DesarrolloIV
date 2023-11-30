package com.example.parcial3.Models;

public class Inicio {
    private String i_img;
    private String i_texto;
    
    public Inicio() {
    }

    public Inicio(String i_img, String i_texto) {
        this.i_img = i_img;
        this.i_texto = i_texto;
    }
    
    public String getI_img() {
        return i_img;
    }
    public void setI_img(String i_img) {
        this.i_img = i_img;
    }
    public String getI_texto() {
        return i_texto;
    }
    public void setI_texto(String i_texto) {
        this.i_texto = i_texto;
    }
}
