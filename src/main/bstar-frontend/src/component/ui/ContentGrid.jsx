import React, { useState, useRef, useEffect } from "react";
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import ContentBox from "./ContentBox";
import HiddenContentBox from "./HiddenContentBox";
import img from '../page/main/images';
import { OndemandVideoTwoTone, PostAddOutlined } from "@mui/icons-material";
import postData from "../../postData.json";
import { useParams } from "react-router-dom";
import CommentBox from "./CommentBox";

import ProfileImage from './ProfileImage';
import MusicBox from "./MusicBox";


function ContentGrid(){

    const [visible, setVisible] = useState(false); //-> delay 없애는 것 필요
    const move = useRef(); // 이런 input , button component에만 적용됨
    const stay = useRef(); // focus 이동시킬 때 사용

    const Move = () => {
        setVisible(true); // 글 자세히 보기 창과 댓글 쓰기 창을 보여줌
        move.current.focus(); // focus 이동
    };

    const Stay = () => {
        setVisible(false);
        stay.current.focus();
    };

    const [id, setId] = useState();
    const [data, setData] = useState(img[0]); //초기 data

    const onView = (id) => { //contentBox에서 선택한 id와 같은 id의 data 찾기 
        setData(img.find(item => item.id === id))
    }

    





    /* 나중에 서버통신할 때 사용
    const [posts, setPosts] = useState([]); 

    const getPosts = () => {
        axios
        .get('서버주소') //axios를 통해 HTTP 요청을 보내는 코드
        .then( (response) => { //then()에서는 HTTP 요청을 통해 받아온 data를 처리할 수 있다
            setPosts(response.data); // 이전에 useState으로 생성했던 setPosts 함수를 통해 data를 posts에 저장
        })
    }

    useEffect(getPosts, []);
    */

    
    
    return(
        <Grid container spacing={6}>
            <Grid item xs={12} sm={6.6}>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '84vh',
                                border: '1px solid skyblue'
                            }}
                            //ref={stay} -> 여기쓰면 적용안됨
                        >
                            <Button
                                ref={stay} // -> 여기써야 적용됨
                            >
                                profile
                            </Button>
                            profile

                            <ProfileImage/>     {/* 프사 */}

                            <MusicBox />
                           

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '84vh',
                                border: '1px solid skyblue',
                                padding : '1%'
                            }}
                        >

                            <Grid container spacing={2}>
                                {/* 하위 component로 전달할 함수 매개변수로 주기 */}

                                {/*서버통신할 때 사용 
                                <ContentBox Move={Move} post={posts}></ContentBox>
                                */}

                                {/* map 함수를 사용해야 data가 1개씩 전달됨 & data수만큼 글 생성 */}
                                { img.map((img) => (
                                   <ContentBox Move={Move} onView={onView} setId={setId} key={img.id} img={img} {...img}></ContentBox>  
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {
                visible 

                && 

                <Grid item xs={12} sm={5.4}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '86vh',
                            border: '1px solid skyblue',
                            //margin: '3%'
                        }}
                        //ref={move}
                    >
                        <Button
                            style={{
                                float: 'right',
                                margin: '0.5%',
                                padding: 0
                            }}
                            ref={move} //이런 입력 , button component에만 적용됨
                            onClick ={Stay}
                        >
                            X
                        </Button>
                        <HiddenContentBox data={data}></HiddenContentBox>
                        <CommentBox data={postData}></CommentBox>
                        
                        
                    </Box>
                </Grid>
            }
        </Grid>
    );

}

export default ContentGrid;