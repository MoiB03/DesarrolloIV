package com.example.parcial3.Services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public Connection openDB(){
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            return DriverManager.getConnection("jdbc:sqlserver://LAPTOP-1HCR59M3:1433;databaseName=Parcial3;user=Moiso;password=moisos05;TrustServerCertificate=True;");

        } catch (SQLException e) {
            e.printStackTrace();
        }
        catch(ClassNotFoundException cnfex){
            cnfex.printStackTrace();
        }
        return null;
    }
}
