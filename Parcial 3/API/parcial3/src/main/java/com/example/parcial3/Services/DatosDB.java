package com.example.parcial3.Services;

import com.example.parcial3.Models.*;

import java.util.*;
import java.sql.*;

public class DatosDB {
    Connection cnn;

    public DatosDB(){
        cnn = new Conexion().openDB();
    }

    public List<Header> ObtenerHeader(){
        try {
            Statement stmt = cnn.createStatement();
            String query = "SELECT * FROM Header";

            List<Header> hdatos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);

            while (result.next()) {
                Header hdato = new Header(
                    result.getString("h_img"),
                    result.getString("h_texto"),
                    result.getString("h_enlace")
                );
                
                hdatos.add(hdato);

            }
            
            result.close();
            stmt.close();
            return hdatos;

        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }
    
    public List<Arcos> ObtenerArcos(){
        try {
            Statement stmt = cnn.createStatement();
            String query = "SELECT * FROM Arcos";

            List<Arcos> adatos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);

            while (result.next()) {
                Arcos adato = new Arcos(
                    result.getString("id_arco"),
                    result.getString("titulo"),
                    result.getString("resumen_arco"),
                    result.getString("imagen"),
                    result.getString("texto_boton"),
                    result.getString("imagen_titulo")
                );
                
                adatos.add(adato);

            }

            result.close();
            stmt.close();
            return adatos;

        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

    public List<Inicio> ObtenerInicio(){
        try {
            Statement stmt = cnn.createStatement();
            String query = "SELECT * FROM Inicio";

            List<Inicio> idatos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);

            while (result.next()) {
                Inicio idato = new Inicio(
                    result.getString("i_img"),
                    result.getString("i_texto")
                );
                
                idatos.add(idato);

            }

            result.close();
            stmt.close();
            return idatos;

        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

        public List<Formulario> ObtenerFormulario(){
        try {
            Statement stmt = cnn.createStatement();
            String query = "SELECT * FROM Formulario";

            List<Formulario> formdatos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);

            while (result.next()) {
                Formulario formdato = new Formulario(
                    result.getString("form_img"),
                    result.getString("form_texto")
                );
                
                formdatos.add(formdato);

            }

            result.close();
            stmt.close();
            return formdatos;

        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

        public List<Openings> ObtenerOpenings(){
        try {
            Statement stmt = cnn.createStatement();
            String query = "SELECT * FROM Openings";

            List<Openings> odatos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);

            while (result.next()) {
                Openings odato = new Openings(
                    result.getString("o_img"),
                    result.getString("o_texto")
                );
                
                odatos.add(odato);

            }

            result.close();
            stmt.close();
            return odatos;

        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

    public List<Footer> ObtenerFooter(){
        try {
            Statement stmt = cnn.createStatement();
            String query = "SELECT * FROM Footer";

            List<Footer> fdatos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);

            while (result.next()) {
                Footer fdato = new Footer(
                    result.getString("f_img"),
                    result.getString("f_texto")
                );
                
                fdatos.add(fdato);

            }

            result.close();
            stmt.close();
            return fdatos;

        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

    public List<Personajes_Inicio> ObtenerPersonajes_Inicio(){
        try {
            Statement stmt = cnn.createStatement();
            String query = "SELECT * FROM Personajes_Inicio";

            List<Personajes_Inicio> pidatos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);

            while (result.next()) {
                Personajes_Inicio pidato = new Personajes_Inicio(
                    result.getString("id_personaje"),
                    result.getString("titulo_p"),
                    result.getString("imagen_p"),
                    result.getString("boton_p")
                );
                
                pidatos.add(pidato);

            }

            result.close();
            stmt.close();
            return pidatos;

        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }
}