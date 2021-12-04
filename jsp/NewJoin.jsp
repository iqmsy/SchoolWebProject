<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="code_shop.DB" %>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.Statement" %>
<%@page import="java.sql.PreparedStatement" %>
<%@page import="java.sql.ResultSet" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>NewJoin.jsp</title>
</head>
<body>
	<script>sign_up_chk()</script>
	<%
	request.setCharacterEncoding("UTF-8");
	String id=request.getParameter("id");
	String password=request.getParameter("password");
	String name=request.getParameter("name");
	String nickname=request.getParameter("nickname");
	int phonenumber=Integer.parseInt(request.getParameter("phonenumber"));
	
	Connection con=DB.DBConnection();
	Statement stmt=con.createStatement();
	
	String isql="insert into user( 아이디, 비밀번호, 이름, 닉네임, 전화번호) values(?, ?, ?, ?, ?)";
	PreparedStatement pstmt=con.prepareStatement(isql);
	

	pstmt.setString(1, id);
	pstmt.setString(2, password);
	pstmt.setString(3, name);
	pstmt.setString(4, nickname);
	pstmt.setInt(5, phonenumber);
	pstmt.executeUpdate();	
	%>
	<script>JoinBox();</script>
	<% 	
		DB.close(pstmt);
		DB.close(stmt);
		DB.close(con);
	%>
	<script>
		alert("회원 가입이 완료되었습니다.");
		location.href="LoginPage.jsp";
	</script>
</body>
</html>