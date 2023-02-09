import React from 'react';
import Sidebar from './Sidebar';
import {Box, Button, Typography} from '@mui/material';
import { Container } from '@mui/system';

function FriendPage(props) {
    return (
        <Box>
            <Sidebar/>
            <Container>
                <Box sx={{height: '10vw'}}/>
                <Typography sx={{margin: '10px 0'}}>friend page</Typography>
                <Button variant="outlined" href='..'>main</Button>
            </Container>
        </Box>
    );
}

export default FriendPage;