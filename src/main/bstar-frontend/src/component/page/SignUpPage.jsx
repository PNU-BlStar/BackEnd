import React, { useState } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

function signUpBody(props) {

    function signIn(){
        let name = document.getElementById('txt_name').value;
        let id = document.getElementById('txt_id').value;
        let email = document.getElementById('txt_email').value;
        let password = document.getElementById('txt_password').value;
        let password2 = document.getElementById('txt_password2').value;
        let year = document.getElementById('txt_year').value;
        let month = document.getElementById('txt_month').value;
        let day = document.getElementById('txt_day').value;
        //var email_test = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if( name === "") {
            alert ("이름을 입력하세요.");
            name.focus();
        }
        else if( id === "") {
            alert ("아이디를 입력하세요.");
            id.focus();
        }
        else if( email === "") {
            alert ("이메일을 입력하세요.");
            email.focus();
        }
        else if( password === "") {
            alert ("비밀번호를 입력하세요.");
            password.focus();
        }
        else if( password2 === "") {
            alert ("비밀번호를 다시 입력하세요.");
            password2.focus();
        }
        else if( year === "") {
            alert ("태어난 년도를 입력하세요.");
            year.focus();
        }
        else if( month === "") {
            alert ("태어난 달을 입력하세요.");
            month.focus();
    
        }
        else if( day === "") {
            alert ("태어난 날짜를 입력하세요.");
            day.focus();
        }
        else if ( password !== password2){
            alert("비밀번호가 일치하지 않습니다.");
        }
        // else if ( email_test.test(email) ===  false){
        //     alert("이메일 형식이 올바르지 않습니다."+
        //      " 이메일 형식 예 : abc@abc.com");
        //     email.focus();
        // }
        else{
            setTimeout(function() {
                alert("가입이 완료되었습니다.")
            },0);
            Navigate('./Login.jsx');
            //location.href="../login_page/login.html";
        }
    }
    function signCancel(){
        // var result = confirm("정말 회원가입을 취소하시겠습니까? T.T");
        // if( result ){
        //     alert("회원가입취소");
        //     //location.href="../login_page/login.html";   //로그인 페이지로 돌아가기
        // }else{
        //     alert("회원가입 다시하기");
        //     //location.href="./signUp.html";  //회원가입 페이지로 돌아가기
        // }
        alert("sign Cancel");
    }
    return (
        <body>
            <style>
                
            </style>
            <section>
                <div class="box1">
                    Sign Up
                </div>
                <div class="box2" id="box2">
                    <p>
                        <label for="txt_name" id="titles">이름</label><br />
                        <input type="text" name="txt_name" id="txt_name" placeholder="이름 입력"></input>
                    </p>
                    <p>
                        <label for="txt_id" id="titles">아이디</label><br />
                        <input type="text" name="txt_id" id="txt_id" placeholder="아이디 입력"></input>
                    </p>
                    <p>
                        <label for="txt_email" id="titles">이메일</label><br />
                        <input type="text" name="txt_email" id="txt_email" placeholder="이메일 입력"></input>
                    </p>
                    <p>
                        <p>
                            <label for="txt_password" id="titles">비밀번호</label><br />
                            <input type="password" name="txt_password" id="txt_password" placeholder="비밀번호 입력"></input>
                        </p>
                        <p>
                            <label for="txt_password2" id="titles">비밀번호 재입력</label><br />
                            <input type="password" name="txt_password2" id="txt_password2" placeholder="비밀번호 재입력"></input>
                        </p>
                        <p>
                            <label for="txt_birth" id="titles">생년월일</label><br />
                            <input type="text" name="txt_year" id="txt_year" placeholder="년"></input>
                            <input type="text" name="txt_month" id="txt_month" placeholder="월"></input>
                            <input type="text" name="txt_day" id="txt_day" placeholder="일"></input>
                        </p>
                        <p>
                            <input type="button" value="확인" onClick={signIn}></input>
                            <input type="reset" value="취소" onClick={signCancel}></input>

                        </p>
                    </p>
                </div>
            </section>
        </body>

    );
}

export default signUpBody;
