import React, { useState } from "react";
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';


function ContentBox(props){ // 상위 component에서 전달한 이름 그대로 받기

    const {Move, onView, id, title, setId } = props;

    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(true);

    return(
        <Grid item xs={12} sm={2.4}>
            <Box
                sx={{
                    width: '100%',
                    height: '18vh',
                    border: '1px solid skyblue',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    "&.MuiBox-root:hover":{
                        backgroundColor: 'lightgray'
                    }
                }}
                onMouseOver={()=>{ 
                    setVisible1(true); // 마우스 올리면 Button 보이게 
                    setVisible2(false); // 마우스 올리면 글 안보이게 
                }}
                onMouseOut={()=>{ 
                    setVisible1(false); // 마우스 내리면 Button 안보이게
                    setVisible2(true); // 마우스 내리면 글 보이게
                }}
            >
                {
                    visible2

                    &&

                    title
                }
                {
                    visible1

                    && 

                    <Button
                        style={{
                            marginTop: '25%',
                            border: '1px solid skyblue'
                        }}

                        onClick={ () => { // 함수 여러개 전달 가능
                            Move(); // 여기에 받은 이름 써주기 
                            setId(id); // 하위 component에서 상위 component로 data 전달
                            onView(id);
                        }}
                    >
                        자세히 보기
                    </Button>
                }
            </Box>
        </Grid>
    );
}

export default ContentBox;