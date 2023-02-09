import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
//import theme from "../../../theme";
import { useNavigate } from "react-router-dom";
import { Container, CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from '@mui/material';

//import { CssBaseline } from "@mui/material-ui/core";


function LoginPage(props) {
    const navigate = useNavigate();

    return (
        
        /*
            Container는 가장 기본적인 layout요소로 
            좌우간격, contents를 가로로 중앙에 배치할 때 사용한다.
            fluid -> maxWidth="원하는 값"으로 지정
            fixed -> fixed를 넣으면 된다. 
            여기서 Container는 가로 방향의 중앙정렬을 위해 사용
        */
        <Container
            maxWidth='md'
        >
            {/* 
                Box는 <Box></Box> 안에 들어가는 tag들에 대한 css를 적용시켜주는 역할
                css를 적용하기 위해서는 sx={{}}안에 작성해야함
                여기서 Box는 화면에서의 세로 방향의 중앙정렬을 적용시기키 위해 사용
            */}
            <Box
                sx={{ 
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center', // 세로 중앙정렬
                }}
            >
                {/* 
                    Grid는 Component들을 나란히 배치하고자 할때 사용한다. 
                    크게 감싸는 Grid와 감싸지는 Grid가 있다. -> 이걸 반드시 지켜야 함
                */}
                {/* 감싸는 Grid -> <Grid container> 
                    여기서 spacing은 item들 사이의 여백 -> 0부터 10까지로 숫자가 커질 수록 여백이 증가
                    spacing={0}의 경우에는 여백을 주지 않겠다는 의미 */}
                <Grid container spacing={0}> 
                    {/* 감싸지는 Grid -> <Grid item>
                        xs는 breakpoint로 화면 크기와 관련 된 것
                        xs={12} sm={6}은 영역을 12개로 분할했을 때 6개만큼의 크기를 차지하겠다는 의미*/}
                    <Grid item xs={12} sm={6}>
                        <Box 
                            sx={{
                                height: '60vh',
                                backgroundColor: '#fafafa',
                                display: 'flex',
                                flexDirection: 'column', //여기서는 direction이 column으로 바뀌었으므로 
                                alignItems: 'center', //세로 중앙 정렬의 역할을 못한다.
                                borderRadius: '10px 0px 0px 10px',
                                boxShadow: 'rgba(0, 0, 0, 0.9) 23px 10px 15px -5px'
                            }}
                        >
                            {/* 
                            이렇게 쓰기도 함
                            <Typography component="h1" variant="h5"> : 크기는 h4인 h1 태그가 생성됨 
                            */}
                            {/* 
                                Typography는 text형태의 정보를 화면에 출력해주는 것
                                h1, p tag...와 같은 역할로 사용가능 -> variant로 바꾸어 준다.
                                여기서는 variant="h3" -> <h3></h3>으로 사용됨
                             */}
                            <Typography  
                                variant="h3"
                                style={{
                                    marginTop: '16%',
                                    marginBottom: 10,
                                    color: '#424242'
                                }}    
                            >
                                Login
                            </Typography>
                            {/*
                                TextField는 input component이다.
                                type으로 어떤 input을 받을지 결정할 수 있음 
                            */}
                            <TextField 
                                label="ID" //labeling 가능
                                type="text" //일반 text입력
                                name="type" 
                                required //반드시 입력해야하는 것
                                autoFocus //자동으로 초점이 맞춰지게 함
                                margin="normal"
                                style={{
                                    backgroundColor: 'white'
                                }}
                            />
                            <TextField 
                                label="PW" 
                                type = "password" //비밀번호 입력
                                name="password" 
                                required 
                                margin="normal"
                                style={{
                                    marginTop: 5,
                                    backgroundColor: 'white'
                                }}
                            />
                            <Button 
                                type="submit" 
                                variant="outlined" 
                                sx={{ //css 적용
                                    mt: 3,
                                    pr: 11,
                                    pl: 11,
                                    color: 'white',
                                    border: '1px solid skyblue',
                                    borderRadius: '10px',
                                    backgroundColor: 'skyblue',
                                    // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                                    // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                                    "&.MuiButton-root:hover":{
                                        color: 'skyblue',
                                        borderColor: 'skyblue'
                                    }
                                }}
                                onClick={() => {
                                    navigate("/main");
                                  }}
                            >
                                로그인
                            </Button>
                            <a
                                type="button"
                                variant="outlined"
                                sx={{ //css 적용
                                    mt: 3,
                                    pr: 11,
                                    pl: 11,
                                    color: 'white',
                                    border: '1px solid skyblue',
                                    borderRadius: '10px',
                                    backgroundColor: 'skyblue',
                                    // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                                    // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                                    "&.MuiButton-root:hover":{
                                        color: 'skyblue',
                                        borderColor: 'skyblue'
                                    }
                                }}
                                href="/oauth2/authorization/google"
                            >
                                구글 로그인
                            </a>
                            <a
                                type="button"
                                variant="outlined"
                                sx={{ //css 적용
                                    mt: 3,
                                    pr: 11,
                                    pl: 11,
                                    color: 'white',
                                    border: '1px solid skyblue',
                                    borderRadius: '10px',
                                    backgroundColor: 'skyblue',
                                    // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                                    // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                                    "&.MuiButton-root:hover":{
                                        color: 'skyblue',
                                        borderColor: 'skyblue'
                                    }
                                }}
                                href="/oauth2/authorization/naver"
                            >
                                네이버 로그인
                            </a>
                            {/* Link는 a tag 같은 역할 */}
                            <Link
                                style={{
                                    marginTop: 15,
                                    color: 'skyblue'
                                }}
                                href="./MainPage"
                                underline="hover"
                            >
                                ID / PW 찾기
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}> {/*12로 나누었을 때 6만큼을 쓴다는 의미*/}
                        <Box 
                            sx={{
                                height: '60vh',
                                background: 'linear-gradient(to right, #C3E7FA, #91D8FA)',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '0px 10px 10px 0px',
                                boxShadow: 'rgba(0, 0, 0, 0.9) 10px 10px 15px -5px'
                            }}
                        >
                            <Typography 
                                variant="h4"
                                color="white"
                                style={{
                                    marginTop: '38%'
                                }}  
                            >
                                함께 해요!
                            </Typography>
                            <Typography 
                                // variant를 안주면 일반 글자크기 적용됨
                                color="white"
                                style={{
                                    fontSize: '0.8rem',
                                    marginTop: 20,
                                    marginBottom: 10
                                }}  
                            >
                                일상을 담고 싶다면?
                            </Typography>

                            <Button 
                                type="submit" 
                                variant="outlined" 
                                sx={{
                                    mt: 4,
                                    pr: 6,
                                    pl: 6,
                                    color: 'white',
                                    border: '1px solid white',
                                    borderRadius: '10px',
                                    "&.MuiButton-root:hover":{
                                        backgroundColor: 'white',
                                        color: 'skyblue',
                                        borderColor: 'white'
                                    }
                                }}
                                onClick={() => {navigate("/SignUpPage")}}
                            >
                                회원가입
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        
    );
}

export default LoginPage;