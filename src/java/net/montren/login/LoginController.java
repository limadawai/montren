package net.montren.login;

import java.io.Serializable;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean(name="login")
@SessionScoped
public class LoginController implements Serializable{
    
    private static final long serialVersionUID = 1094801825228386363L;
    
    private String uname;
    private String passwd;
    
    public void validasi(){
        System.out.println("Username : "+this.uname);
        System.out.println("Pasword : "+this.passwd);
    }

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
    
}
