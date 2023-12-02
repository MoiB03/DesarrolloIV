package com.example.parcial3.Models;

public class Formulario {

    private String form_img;
	private String form_texto;
	private String form_nombre;
	private String form_correo;
	private String form_mens;
	private String form_env;
    
    public Formulario() {
    }
    
    public Formulario(String form_img, String form_texto, String form_nombre, String form_correo, String form_mens,
            String form_env) {
        this.form_img = form_img;
        this.form_texto = form_texto;
        this.form_nombre = form_nombre;
        this.form_correo = form_correo;
        this.form_mens = form_mens;
        this.form_env = form_env;
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
    public String getForm_nombre() {
        return form_nombre;
    }
    public void setForm_nombre(String form_nombre) {
        this.form_nombre = form_nombre;
    }
    public String getForm_correo() {
        return form_correo;
    }
    public void setForm_correo(String form_correo) {
        this.form_correo = form_correo;
    }
    public String getForm_mens() {
        return form_mens;
    }
    public void setForm_mens(String form_mens) {
        this.form_mens = form_mens;
    }
    public String getForm_env() {
        return form_env;
    }
    public void setForm_env(String form_env) {
        this.form_env = form_env;
    }

}
