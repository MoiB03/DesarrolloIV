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
                    result.getString("h_texto")
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
}
