package code_shop;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class InsertIntoUser{

   public static void main(String[] args) {
      Connection con=null;
      Statement stmt=null;
      String url="jdbc:mysql://localhost/code_shop";
      String id="root";
      String pw="iqmsy0413^^";
      
      try {
         Class.forName("com.mysql.cj.jdbc.Driver");
      } catch(java.lang.ClassNotFoundException e) {
         System.err.print("ClassNotFoundException: ");
         System.err.println(e.getMessage());
         return;
      }
      
      int count = 0;
      String insertString = "INSERT INTO user VALUES ";
      String recordString[] = {insertString+"('lyl','Iqmsy0413^^','이영림','뿌요',01023456789)"};
      try {
         con=DriverManager.getConnection(url,id,pw);
         stmt=con.createStatement();
         while(count<recordString.length) {
            stmt.executeUpdate(recordString[count]);
            count++;
         }
         System.out.println(count+"개의 레코드가 user 테이블에 삽입되었습니다.");
      } catch(SQLException ex) {
         System.err.println("SQLException: "+ex.getMessage());
      } finally {
         try {
            if(stmt!=null)
               stmt.close();
            if(con!=null)
               con.close();
         }catch(Exception e) {}
      }
      
   }
}