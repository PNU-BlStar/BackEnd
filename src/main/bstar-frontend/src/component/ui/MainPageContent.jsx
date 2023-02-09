import React from 'react';
import Sidebar from '../page/Sidebar';
import {Box} from '@mui/material';
import ContentGrid from './ContentGrid';
import CommentList from "../list/CommentList";


function MainPageContent(props) {
    return (
        <Box
            sx={{
                width: '172%',
                height: '85vh',
                border: '1px solid skyblue',
                padding: '4.5%',
                paddingBottom: '1%',
                marginTop: props.style
            }}
        >
            <Sidebar/>
            <ContentGrid></ContentGrid>
        </Box>
    );
}

export default MainPageContent;