/*
	* 공통적으로 사용되는 자바스크립트 코드 *
*/

/* -------------------------------------------------- */
/* 로그인 */
/* -------------------------------------------------- */

/* 로그인 체크 (미리 저장된 테스트용 id/pw) */
function loginchk() {
	//입력된 아이디 변수에 대입
	var chk_id = document.getElementById("id").value;
		
	//입력된 비빌번호 변수에 대입
	var chk_pw = document.getElementById("pw").value;
	
	//로그인 체크
	if (chk_id.search(/\s/) == -1) {//아이디 공백체크 - 공백없을시 유효성 검사 시작
		
		//id : admin, pw : admin123 인 경우
		if (chk_id == "admin" && chk_pw == "admin123") {
			alert("admin 님 반갑습니다 ^^");
			location.href = "../HTML-LoginOK/index.html";
		}
		
		//id : user01, pw : user111 인 경우
		else if (chk_id == "user01" && chk_pw == "user111") {
			alert("user01 님 반갑습니다 ^^");
			location.href = "../HTML-LoginOK/index.html";
		}
		
		//id : user02, pw : user222 인 경우
		else if (chk_id == "user02" && chk_pw == "user222") {
			alert("user02 님 반갑습니다 ^^");
			location.href = "../HTML-LoginOK/index.html";
		}
		
		//id : user03, pw : user333 인 경우
		else if (chk_id == "user03" && chk_pw == "user333") {
			alert("user03 님 반갑습니다 ^^");
			location.href = "../HTML-LoginOK/index.html";
		}
		else {
			alert("아이디, 비밀번호가 일치하지 않습니다.");
		}
		
	}
	else {
		alert("아이디, 비밀번호가 일치하지 않습니다.");
	}
	
}

/* 로그인시 Enter키 눌렀을때 작동되게 하기 */
// enter키가 눌렸을 때 실행할 내용
function enterKey() {
	if (window.event.keyCode == 13) {
		loginchk();
	}
}

/* -------------------------------------------------- */
/* 회원가입 */
/* -------------------------------------------------- */
function sign_up_chk() {
	var sign_up_id = document.getElementById("sign_up_id").value;
	var sign_up_pw = document.getElementById("sign_up_pw").value;
	var sign_up_pw_chk = document.getElementById("sign_up_pw_chk").value;
	var sign_up_name = document.getElementById("sign_up_name").value;
	var birth_year = document.getElementById("birth_year").value;
	var birth_month = document.getElementById("birth_month").value;
	var birth_day = document.getElementById("birth_day").value;
	var sign_up_gender = document.getElementById("sign_up_gender").value;
	var sign_up_mobile = document.getElementById("sign_up_mobile").value;
	var sign_up_email = document.getElementById("sign_up_email").value;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/gi; //아이디 특수문자 체크
	var pattern_chk2 = /[0-9]/;
	var pattern_chk3 = /[a-zA-Z]/;
	var pattern_chk4 = /[~!@#$%^&*()_+|<>?:{}]/;
	
	/* 아이디 유효성 체크 */
	if (sign_up_id.length == 0) {
		alert("아이디를 입력해 주십시오.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (sign_up_id.search(/\s/) != -1) {//아이디 공백체크
		alert("아이디에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(sign_up_id)) { //아이디 특수문자 체크
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}

	
	/* 비밀번호 유효성 체크 */
	else if (!pattern_chk2.test(sign_up_pw) || !pattern_chk3.test(sign_up_pw) || !pattern_chk4.test(sign_up_pw) || sign_up_pw.length <8) {
		alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}

		
	/* 비밀번호 재확인 체크 */
	else if (sign_up_pw != sign_up_pw_chk) {
		alert("입력하신 비밀번호가 다릅니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}

	
	/* 이름 체크 */
	else if (sign_up_name.length == 0) {
		alert("이름을 입력해 주십시오.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (sign_up_name.search(/\s/) != -1) {
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(sign_up_name)) {
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	
	/* 생년월일 체크 */
	else if (birth_year.length != 4) {
		alert("년도는 4자리 숫자이어야 합니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (birth_month.length == 0) {
		alert("month를 입력하세요.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (birth_day.length != 2) {
		alert("day는 두자리 숫자이어야 합니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 성별 체크 */
	else if (sign_up_gender.length == 0) {
		alert("성별을 선택하세요.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 휴대전화 체크 */
	else if (sign_up_mobile.length == 0 || pattern_chk1.test(sign_up_mobile) || !pattern_chk2.test(sign_up_mobile) || pattern_chk3.test(sign_up_mobile) || sign_up_mobile.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 이메일 체크 */
	else if (sign_up_email.length == 0) {
		alert("email을 입력하세요.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	/* 유효성 체크 통과시 가입 진행 */
	else {
		if (confirm("입력한 정보로 가입하시겠습니까?") == true) {
			alert("가입되었습니다. 메인페이지에서 다시 로그인 해주세요.");
			location.href = "../index.html";
		}
	}
	
}

/* -------------------------------------------------- */
/* 아이디 찾기, 비밀번호 찾기 */
/* -------------------------------------------------- */
/* 인증번호 받기 - 아이디 찾기 */
function certification_number_receive() {
	var findInfo_name = document.getElementById("findInfo_name").value;
	var findInfo_mobile = document.getElementById("findInfo_mobile").value;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/gi; //특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크
	var pattern_chk3 = /[a-zA-Z]/; // 문자체크

	/* 이름 체크 */
	if (findInfo_name.length == 0) {
		alert("이름을 입력해 주십시오.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (findInfo_name.search(/\s/) != -1) {
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(findInfo_name)) {
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	
	/* 휴대전화 체크 */
	else if (findInfo_mobile.length == 0 || pattern_chk1.test(findInfo_mobile) || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보 입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
		
	/* 유효성 체크 통과시 인증번호 발송 */
	else {
		alert("인증번호가 발송되었습니다.");
	}
	
}

/*  아이디 찾기  */
function findId_chk() {
	var findInfo_name = document.getElementById("findInfo_name").value;
	var findInfo_mobile = document.getElementById("findInfo_mobile").value;
	var findInfo_ct_num = document.getElementById("certification_number").value;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/gi; //특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크
	var pattern_chk3 = /[a-zA-Z]/; // 문자체크

	/* 이름 체크 */
	if (findInfo_name.length == 0) {
		alert("이름을 입력해 주십시오.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (findInfo_name.search(/\s/) != -1) {
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(findInfo_name)) {
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	
	/* 휴대전화 체크 */
	else if (findInfo_mobile.length == 0 || pattern_chk1.test(findInfo_mobile) || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보 입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	
	/* 인증번호 체크 */
	else if (findInfo_ct_num.length == 0) {
		alert("인증번호가 다릅니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	
	/* 유효성 체크 통과시 아이디 찾기 진행 */
	else {
		alert("입력하신 정보의 회원정보가 존재하지 않습니다.");
	}
}


/* 인증번호 받기 - 비밀번호 찾기 */
function certification_number_receive_2() {
	var findInfo_id = document.getElementById("findInfo_id").value;
	var findInfo_name = document.getElementById("findInfo_name").value;
	var findInfo_mobile = document.getElementById("findInfo_mobile").value;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/gi; //특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크
	var pattern_chk3 = /[a-zA-Z]/; // 문자체크


	/* 아이디 유효성 체크 (비밀번호 찾기 버튼 눌렀을때) */
	if (findInfo_id.length == 0) {
		alert("아이디를 입력해 주세요");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (findInfo_id.search(/\s/) != -1 || pattern_chk1.test(findInfo_id)) {
		//아이디 공백, 특수문자, 체크
		alert("아이디에는 공백, 특수문자가 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}


	/* 이름 체크 */
	else if (findInfo_name.length == 0) {
		alert("이름을 입력해 주십시오.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (findInfo_name.search(/\s/) != -1) {
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(findInfo_name)) {
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	
	/* 휴대전화 체크 */
	else if (findInfo_mobile.length == 0 || pattern_chk1.test(findInfo_mobile) || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보 입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
		
	/* 유효성 체크 통과시 인증번호 발송 */
	else {
		alert("인증번호가 발송되었습니다.");
	}
	
}

/* 비밀번호 찾기 */
function findPw_chk() {
	var findInfo_id = document.getElementById("findInfo_id").value;
	var findInfo_name = document.getElementById("findInfo_name").value;
	var findInfo_mobile = document.getElementById("findInfo_mobile").value;
	var findInfo_ct_num = document.getElementById("certification_number").value;
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/gi; //특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크
	var pattern_chk3 = /[a-zA-Z]/; // 문자체크

	/* 아이디 유효성 체크 */
	if (findInfo_id.length == 0) {
		alert("아이디를 입력해 주십시오.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (findInfo_id.search(/\s/) != -1) {//아이디 공백체크
		alert("아이디에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(findInfo_id)) { //아이디 특수문자 체크
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}

	/* 이름 체크 */
	else if (findInfo_name.length == 0) {
		alert("이름을 입력해 주십시오.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (findInfo_name.search(/\s/) != -1) {
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	else if (pattern_chk1.test(findInfo_name)) {
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	
	/* 휴대전화 체크 */
	else if (findInfo_mobile.length == 0 || pattern_chk1.test(findInfo_mobile) || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보 입니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	
	/* 인증번호 체크 */
	else if (findInfo_ct_num.length == 0) {
		alert("인증번호가 다릅니다.");
		return;//exit 기능. return만 사용하면 null을 반환.
	}
	
	
	/* 유효성 체크 통과시 비밀번호 찾기 진행 */
	else {
		alert("입력하신 휴대전화 번호로 임시 비밀번호를 발송하였습니다.");
		location.href = "../index.html";
	}	
                   
}

/* -------------------------------------------------- */
/* 로그아웃 */
/* -------------------------------------------------- */
/* 로그아웃 확인 */
function logout_chk() {
	if (confirm("로그아웃 하시겠습니까?") == true) {
		location.href = "../index.html";
	}	
}