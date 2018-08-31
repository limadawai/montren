package user.login;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class LoginDAO {
    
    public static boolean validasiLogin(String username, String Password) {
        Connection conn = null;
        PreparedStatement ps = null;
        conn = DataConnect.getConnection();
        try {
            ps = conn.prepareStatement("select * from m_user where username = ? and password = ?");
            ps.setString(1, username);
            ps.setString(2, Password);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return true;
            }
        } catch (SQLException ex) {
            Logger.getLogger(LoginDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            DataConnect.close(conn);
        }
        return false;
    }
    
}
