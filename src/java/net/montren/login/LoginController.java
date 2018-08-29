package net.montren.login;

import java.io.IOException;
import java.io.Reader;
import java.io.Serializable;
import static java.lang.Integer.parseInt;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import net.montren.bean.Test;
import org.apache.ibatis.executor.ErrorContext;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

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
      public void validasi2() throws IOException{
        
      
// try {
            Reader reader = Resources.getResourceAsReader("postgresqlConfig.xml");
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);

            SqlSession session = sqlSessionFactory.openSession();
            Test test = new Test(parseInt(this.uname),"tester");
            System.out.println("Username : "+this.uname);
        System.out.println("Pasword : "+this.passwd);
            
/*menghapus semua dibatis */
//            session.delete("Test.deleteAll"); 
            
/*insert  record dibatis */
            session.insert("Test.insert", test);
            
            System.out.println("record inserted successfully");
            List<Test> test2 = session.selectList("Test.getAll");
            
            for(Test ts : test2){
                System.out.println(ts.getId()+"->"+ts.getName()); 
            }
            
            
///*Convert LIST ke JSON*/
//            this.select1 = new Gson().toJson(test2);
//            
///*Coding Batis update*/
//            Test test3 = (Test) session.selectOne("Test.getById", 1);
//            test3.setName("ubah");
//            session.update("Test.update",test3);
//            
            session.commit();
            session.close();
//            
//            System.out.println("Records Read Successfully ");
//            System.out.println("Username : "+this.uname);
//            System.out.println("Pasword : "+this.passwd);
//             System.out.println("db : "+this.db);
//            
//            /*redirect halaman via bean */
//            //FacesContext context = FacesContext.getCurrentInstance();
//            //HttpServletResponse response = (HttpServletResponse) context.getExternalContext().getResponse();
//            //response.sendRedirect("admin/dashboard.xhtml");
//            this.pesan ="berhasil";
//            } catch (Exception e) {
//                    this.pesan ="gagal";
////                    throw ExceptionFactory.wrapException("Error updating database.  Cause: " + e, e);
//                    
//                    
//                } finally {
//                    ErrorContext.instance().reset();
//                     
//                }
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
