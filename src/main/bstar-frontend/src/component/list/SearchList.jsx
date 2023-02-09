import {Box, Divider} from '@mui/material';
import React from 'react';
import SearchListItem from '../ui/SearchListItem';

function SearchList(props) {
    const {posts, onClickItem, offset, pageLimit} = props;
    return (
        <Box sx={{width: '95%'}}>
            <Divider/>  
            {posts.slice(offset, offset + pageLimit).map((post, index) => {
                return(
                    <>
                        <Divider/>    
                        <SearchListItem 
                            key={post.id}
                            post={post}
                            onClick={() => {onClickItem(post)}}
                        />
                        <Divider/>  
                    </>  
                );
            })}
            <Divider/>  
        </Box>
    );
}

export default SearchList;