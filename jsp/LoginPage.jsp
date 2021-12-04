<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="utf-8"%>
<%@page import="code_shop.DB" %>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.Statement" %>
<%@page import="java.sql.PreparedStatement" %>
<%@page import="java.sql.ResultSet" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="description" content="code_shop">
	<meta name="keywords" content="HTML5, CSS, JavaScript">
	
	<!-- 웹 페이지와 외부 자원간의 관계를 정의, 주로 스타일시트(CSS)파일 링크에 사용됨. -->
	<link rel="stylesheet" type="text/css" href="../css/main.css">
	
	<title>Login_로그인</title>
</head>

<body>
	<div class="wrapper">
		<!--헤더영역(사이트의 소개나 네비게이션 등을 표시하는 영역) 시작-->
		<div>
			<header class="header">
				<p>
				<a href="index.html">
					<img src="../images/main.PNG" width="70px"height="70px">
				</a>
				<a href="../jsp/NewJoinPage.jsp" >
					<img src="../images/join.PNG" width="70px"height="70px">
				</a>
				<a href="../jsp/LoginPage.jsp" >
					<img src="../images/login.PNG" width="70px"height="70px">
				</a>
				<a href="../jsp/UserPage.jsp">
					<img src="../images/user.PNG" width="70px"height="70px">
				</a>
				</p>
				
				<!--네비게이션 영역 시작-->
				<!--사이트의 네비게이션(메뉴) 항목을 표시-->
				<nav class="main_nav">
					<a href="index.html">MAIN&nbsp;&nbsp;&nbsp;&nbsp;</a>
					<a href="SearchCode.html">SearchCode&nbsp;&nbsp;&nbsp;&nbsp;</a>
					<a href="C.html">c언어&nbsp;&nbsp;&nbsp;&nbsp;</a>
					<a href="C++.html">C++&nbsp;&nbsp;&nbsp;&nbsp;</a>
					<a href="Java.html">Java&nbsp;&nbsp;&nbsp;&nbsp;</a>
					<a href="Python.html">Python&nbsp;&nbsp;&nbsp;&nbsp;</a>
				</nav>
				<!--네비게이션 영역 끝-->
			</header>
		</div>
		<!--헤더영역(사이트의 소개나 네비게이션 등을 표시하는 영역) 끝-->
		
		<!--콘텐츠 및 섹션 영역 시작-->
		<div>
			<aside class="aside">
				<h3>
				<font color="white;">CODE_SHOP</font>
				</h3>
				<p>
					<font color="white;">  </font>
				</p>
				<!--사이드바 내용 추가 시작-->
							<a href="index.html">MAIN</a>
							<br>
							<a href="C.html">C언어</a>
							<br>
							<a href="C++.html">C++</a>
							<br>
							<a href="Java.html">Java</a>
							<br>
							<a href="Python.html">Python</a>
				<!--사이드바 내용 추가-->
			</aside>
			
			<article class="art">
			<div>
			<form action="<%=request.getContextPath()%>/jsp/Login.jsp" method="post">
			<input type="hidden" name="ip" value=<%=request.getRemoteAddr() %>/>
			<table width="400" align="center" border="1">
				<tr><th colspan="2">로그인</th></tr>
				<tr>
					<td width="200" align="center" font-size="7px;" background-color="#F8C9E5">아이디</td>
					<td width="200" align="center" font-size="7px;" background-color="#F8C9E5"><input type="text" name="id"/></td>
				</tr>
				<tr>
					<td width="200" align="center">비밀번호</td>
					<td width="200" align="center"><input type="text" name="passwd"/></td>
				</tr>
				<tr>
					<td colspan="2" align="center"><input type="submit" value="로그인"/></td>
				</tr>
			</table>
			</form>
			</div>
			</article>
		</div>
		<!--콘텐츠 및 섹션 영역 끝-->

		<!--푸터영역 시작-->
		<footer class="footer">
			<div>
				<img src="../images/kongju.PNG" width="200px"height="65px">
				<details>
				<summary>
					<font color="white;">Copyright</font>
				</summary>
				<p>
					<font color="white;">201901386Leeyounglim</font>
				</p>
				</details>
			</div>
		</footer>
		<!--푸터영역 끝-->
	</div>
</body>
</html>