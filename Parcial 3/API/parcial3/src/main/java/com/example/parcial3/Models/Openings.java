package com.example.parcial3.Models;

public class Openings {
    private String o_img;
    private String o_texto;
    
    public Openings() {
    }

    public Openings(String o_img, String o_texto) {
        this.o_img = o_img;
        this.o_texto = o_texto;
    }
    
    public String getO_img() {
        return o_img;
    }
    public void setO_img(String o_img) {
        this.o_img = o_img;
    }
    public String getO_texto() {
        return o_texto;
    }
    public void setO_texto(String o_texto) {
        this.o_texto = o_texto;
    }
}
