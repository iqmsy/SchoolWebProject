<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="code_shop.DB" %>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.Statement" %>
<%@page import="java.sql.PreparedStatement" %>
<%@page import="java.sql.ResultSet" %>
<!DOCTYPE html>
<html>
	<script type="text/javascript">
		function LoginFailBox() {
			alert("아이디 또는 비밀번호가 틀립니다.");
			window.history.back();
		}
	</script>
<head>
<meta charset="UTF-8">
<title>Login.jsp</title>
</head>
<body>
	<%
	request.setCharacterEncoding("UTF-8");
	String id=request.getParameter("id");
	String passwd=request.getParameter("passwd");
	
	Connection con=DB.DBConnection();
	Statement stmt=con.createStatement();
	String lsql="select * from 사용자 where 아이디 = ? and 비밀번호 = ?";
	
	PreparedStatement pstmt=con.prepareStatement(lsql);
	
	pstmt.setString(1, id);
	pstmt.setString(2, passwd);
	ResultSet rs=pstmt.executeQuery();
	
	int idnum=0;
	int parknum=0;
	int count=rs.getRow();
	
	DB.close(rs);
	DB.close(pstmt);
	DB.close(con);
	
	%>
	<script>
		location.href="UserPage.jsp";
	</script>
</body>
</html>