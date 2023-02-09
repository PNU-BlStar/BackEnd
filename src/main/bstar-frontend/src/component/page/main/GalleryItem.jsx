import React,  {useState} from "react";
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const GalleryItem = (props) => {

    const { setIndex, index, data} = props;

    return (
        <Box
            sx={{
                width: '100%',
                height: '50vh',
                border: '1px solid skyblue',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                //margin: 0
            }}
        >
                
            <Button
                onClick={ () => {
                    setIndex(index-1);
                }}
                sx={{
                    height: '50vh',
                    float: 'left',
                    pr: 0,
                    pl: 0,
                    color: 'white',
                    "&.MuiButton-root:hover":{
                        color: 'skyblue',
                        borderColor: 'skyblue'
                    }
                }}
            >
                <ArrowBackIosIcon/>
            </Button>
            
            {/* JSON 객체 배열에서 객체 액세스 하는 방법으로 src변경 */}
            <img // img 클릭하면 dialog로 크게 볼 수 있게 하기 -> 해야할 것
                src={data.image[index]} 
                alt={''}
                style={{
                    width: '55%',
                    height: 'auto'
                }}
            />
         
            <Button
                onClick={ () => {
                    setIndex(index+1);
                }}
                sx={{
                    height: '50vh',
                    float: 'right',
                    pr: 0,
                    pl: 0,
                    color: 'white',
                    "&.MuiButton-root:hover":{
                        color: 'skyblue',
                        borderColor: 'skyblue'
                    }
                }}
            >
                <ArrowForwardIosIcon/>
            </Button>
        </Box>
    );
};

export default GalleryItem;