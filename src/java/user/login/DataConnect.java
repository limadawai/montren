package user.login;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DataConnect {

    public static Connection getConnection() {
        Connection conn = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection("jdbc:postgresql://127.0.0.1:5432/monitoring", "postgres", "");
            return conn;
        } catch (SQLException ex) {
            Logger.getLogger(DataConnect.class.getName()).log(Level.SEVERE, null, ex);
            ex.printStackTrace();
            return null;
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        }

        if (conn != null) {
            System.out.println("Koneksi sukses");
            return conn;
        }
        return null;
    }

    public static void close(Connection con) {
        try {
            con.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}
