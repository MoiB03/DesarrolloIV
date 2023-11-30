package com.example.parcial3.Models;

public class Formulario {
    private String form_img;
    private String form_texto;
    
    public Formulario() {
    }
    
    public Formulario(String form_img, String form_texto) {
        this.form_img = form_img;
        this.form_texto = form_texto;
    }
    public String getForm_img() {
        return form_img;
    }
    public void setForm_img(String form_img) {
        this.form_img = form_img;
    }
    public String getForm_texto() {
        return form_texto;
    }
    public void setForm_texto(String form_texto) {
        this.form_texto = form_texto;
    }
}
