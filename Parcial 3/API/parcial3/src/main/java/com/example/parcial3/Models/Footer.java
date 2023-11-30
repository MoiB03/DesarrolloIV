package com.example.parcial3.Models;

public class Footer {
    private String foot_img;
    private String foot_texto;
    
    public Footer() {
    }
    
    public Footer(String foot_img, String foot_texto) {
        this.foot_img = foot_img;
        this.foot_texto = foot_texto;
    }
    public String getFoot_img() {
        return foot_img;
    }
    public void setFoot_img(String foot_img) {
        this.foot_img = foot_img;
    }
    public String getFoot_texto() {
        return foot_texto;
    }
    public void setFoot_texto(String foot_texto) {
        this.foot_texto = foot_texto;
    }
}
