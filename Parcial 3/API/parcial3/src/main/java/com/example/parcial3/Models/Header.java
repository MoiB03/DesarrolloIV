package com.example.parcial3.Models;

public class Header {
    private String h_img;
    private String h_texto;
    private String h_enlace;
    
    public Header(String h_img, String h_texto, String h_enlace) {
        this.h_img = h_img;
        this.h_texto = h_texto;
        this.h_enlace = h_enlace;
    }

    public Header(){
    }
    
    public String getH_img() {
        return h_img;
    }
    public void setH_img(String h_img) {
        this.h_img = h_img;
    }
    public String getH_texto() {
        return h_texto;
    }
    public void setH_texto(String h_texto) {
        this.h_texto = h_texto;
    }
    public String getH_enlace(){
        return h_enlace;
    }
    public void setH_enlace(String h_enlace){
        this.h_enlace = h_enlace;
    }
}
