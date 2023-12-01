package com.example.parcial3.Models;

public class Personajes_Inicio {
    private String pi_img;
    private String pi_texto;

    public Personajes_Inicio(){
    }

    public Personajes_Inicio(String pi_img, String pi_texto) {
        this.pi_img = pi_img;
        this.pi_texto = pi_texto;
    }
    
    public String getPi_img() {
        return pi_img;
    }
    public void setPi_img(String pi_img) {
        this.pi_img = pi_img;
    }
    public String getPi_texto() {
        return pi_texto;
    }
    public void setPi_texto(String pi_texto) {
        this.pi_texto = pi_texto;
    }

}
