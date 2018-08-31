package user.login;

import java.io.IOException;
import java.io.Serializable;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;

@ManagedBean(name = "obj")
@SessionScoped
public class Login implements Serializable {

    private static final long serialVersionUID = 1094801825228386363L;

    private String uname;
    private String passwd;

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public String validasi() {
        /*boolean valid = LoginDAO.validasiLogin(uname, passwd);
        if (valid) {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            session.setAttribute("username", uname);
            return "sukses";
        } else {
            return "gagal";
        }*/
        return "Sukses";
    }

    public void logout() {
        FacesContext fc = FacesContext.getCurrentInstance();
        fc.getExternalContext().invalidateSession();
        try {
            fc.getExternalContext().redirect("/montren/login.xhtml");
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
    
    public String checkSession(){
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        String user = session.getAttribute("username").toString();
        if (user.equals("")) {
            try {
                facesContext.getExternalContext().redirect("/montren/login.xhtml");
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        } else {
            return user;
        }
        return null;
    }

}
