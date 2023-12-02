package com.example.parcial3.Models;

public class Openings {
    private String o_img;
	private String o_lista;
	private String o_lista_texto;
	private String playlist;
	private String playlist_texto;
	private String gif;
    
    public Openings() {
    }

    public Openings(String o_img, String o_lista, String o_lista_texto, String playlist, String playlist_texto,
            String gif) {
        this.o_img = o_img;
        this.o_lista = o_lista;
        this.o_lista_texto = o_lista_texto;
        this.playlist = playlist;
        this.playlist_texto = playlist_texto;
        this.gif = gif;
    }
    
    public String getO_img() {
        return o_img;
    }
    public void setO_img(String o_img) {
        this.o_img = o_img;
    }
    public String getO_lista() {
        return o_lista;
    }
    public void setO_lista(String o_lista) {
        this.o_lista = o_lista;
    }
    public String getO_lista_texto() {
        return o_lista_texto;
    }
    public void setO_lista_texto(String o_lista_texto) {
        this.o_lista_texto = o_lista_texto;
    }
    public String getPlaylist() {
        return playlist;
    }
    public void setPlaylist(String playlist) {
        this.playlist = playlist;
    }
    public String getPlaylist_texto() {
        return playlist_texto;
    }
    public void setPlaylist_texto(String playlist_texto) {
        this.playlist_texto = playlist_texto;
    }
    public String getGif() {
        return gif;
    }
    public void setGif(String gif) {
        this.gif = gif;
    }
    

}
