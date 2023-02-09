import {Box, Typography} from '@mui/material';
import React from 'react';
import data from "../../data.json";

function SearchListItem(props) {
    const {post, onClick} = props;

    const person = data.find((person) => {
        return person.id === post.id;
    });

    return (
        <Box onClick={onClick} sx={{margin: '10px 0', display: 'flex'}}>
            <Box sx={{width: '160px', height: '160px', margin: '10px', display:'inline-block',
                border: '1px solid rgba(0,0,0,0.25)', borderRadius: '5px'}}></Box>
            <Box sx={{display:'inline-block', margin: '10px', width: '80%'}}>
                <Box>
                    <Typography variant="h6">{post.title}</Typography>
                    <Box sx={{margin: '5px 0'}}>{person.nickName}, {post.date}</Box>
                    <Box sx={{marginTop: '15px'}}>{post.content.length > 150? post.content.substr(0, 150) + "..." : post.content}</Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SearchListItem;