package com.example.parcial3.Models;

public class Arcos {
    private String a_img;
    private String a_texto;
    
    public Arcos() {
    }

    public Arcos(String a_img, String a_texto) {
        this.a_img = a_img;
        this.a_texto = a_texto;
    }
    
    public String getA_img() {
        return a_img;
    }
    public void setA_img(String a_img) {
        this.a_img = a_img;
    }
    public String getA_texto() {
        return a_texto;
    }
    public void setA_texto(String a_texto) {
        this.a_texto = a_texto;
    }

}
