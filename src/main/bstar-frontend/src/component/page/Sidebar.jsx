import React, {useState, useEffect} from 'react';
import { Drawer, Box, List, ListItem, ListItemIcon, ListItemButton, 
    ListItemText, InputBase, Collapse, Button, Typography } from '@mui/material';
import {SearchRounded, ExpandLess, ExpandMore, Group, Settings, Edit} from '@mui/icons-material';
import {styled} from '@mui/system';
import {useNavigate} from "react-router-dom";
import data from "../../data.json";
import { useStore, useSideState } from './SearchPage';

const Search = styled(ListItem)({
    width: '90%',
    borderRadius: '20px',
    margin: '10px 0px 10px 15px',
    backgroundColor: 'rgba(0,0,0,0.06)',
});

const SearchIconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const SearchInput = styled(InputBase)({
    display: 'inline-block',
    marginLeft: '10px',
    fontSize: '15px',
});

const NestedBox = styled(Collapse)({
    overflowY : "auto",
    maxHeight: "57vh",
    "&::-webkit-scrollbar" :{
        width: 0,
    }
})

const StateCircle = styled('div')({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#757ce8',
});

const ImageCircle = styled('div')({
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    backgroundColor: '#15456915',
    marginRight: '20px',
});

function Sidebar(){
    const items = [
        'write',
        'friends', 
        'setting',
    ];

    const texts = [
        '글쓰기',
        '이웃',
        '설정',
    ];

    const [keyword, setKeyword] = useStore("");
    const [state, setState] = useSideState();
    const [nestedOpen, setNestedOpen] = useState(false);
    const [mousePositionX, setMousePositionX] = useState();
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const [word, setWord] = useState("");

    useEffect(() => {
        const onMouseMove = (e) => {
            setMousePositionX(e.clientX);
            const clientX = mousePositionX;
            if(clientX >= 0 && clientX <= 10){
                setToggle(true);
            }
            else if(clientX > 300){
                setToggle(false);
            }
        };
        window.addEventListener('mousemove', onMouseMove);
    })

    return (
        <Box 
            sx={{ 
                display: 'flex',
                alignItems: 'center',
            }}          
        >
            <Drawer 
                anchor="left" 
                open={toggle}
                PaperProps={{sx: {width: '300px'}}}
            >
                <List>
                    <ListItem key='header'>
                        <Typography variant="h4" onClick={() => navigate("..")} sx={{margin: '10px 10px', cursor: 'pointer'}} >Bstar</Typography>
                        <Typography variant="body" onClick={() => {navigate("/main"); setToggle(false);}} sx={{margin: '10px 10px 10px 100px', cursor: 'pointer', color: 'rgba(23, 36, 40, 0.8)'}}>home</Typography>
                    </ListItem>
                    <Search key='search'>
                        <SearchIconWrapper>
                            <SearchRounded />
                        </SearchIconWrapper>
                        <SearchInput 
                            value={word}
                            placeholder='검색어를 입력하세요.'
                            onChange={(e) => {
                                setKeyword(e.target.value);
                                setWord(e.target.value);
                            }}
                            onKeyUp={(e) => {
                                if(e.keyCode === 13){
                                    if(keyword === ""){
                                        alert('검색어를 입력해 주세요.');
                                    }
                                    else{
                                        setWord("");
                                        setToggle(false);
                                        setState(state + 1 % 10);
                                        navigate('/search');
                                    }
                                }
                            }}
                        />    
                    </Search>   
                    {items.map((item, index) => {
                        if(item === 'friends'){
                             return(
                                <>
                                    <ListItem key={item} sx={{padding: '0 5px'}}>
                                        <ListItemButton href={'/friend'}>
                                            <ListItemIcon>
                                                <Group style={{ color: 'skyblue' }}/>
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography style={{fontWeight:'bold'}}>{texts[index]}</Typography>}/> 
                                        </ListItemButton>
                                        <Button onClick={()=> {setNestedOpen(!nestedOpen)}}>
                                                {nestedOpen? <ExpandLess /> : <ExpandMore />}
                                        </Button>
                                    </ListItem>
                                    <NestedBox in={nestedOpen} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {data.map((friend, index) => {
                                                return(
                                                    <ListItem key={friend.id} sx={{ padding: '0 15px 0 25px'}}>
                                                        <ListItemButton href={'/' + friend.blogName}>
                                                            <ImageCircle/>
                                                            <ListItemText primary={friend.nickName} sx={{margin: '0 10px'}}/>
                                                            {friend.newState && <StateCircle/>}
                                                        </ListItemButton>
                                                    </ListItem>
                                                );  
                                            })}
                                        </List>
                                    </NestedBox>
                                </>
                             );
                        }
                        else{
                            return(
                                <ListItem key={item} sx={{padding: '0 5px'}}>
                                    <ListItemButton href={'/' + item}>
                                        <ListItemIcon>
                                            {item === "setting"? <Settings style={{ color: 'skyblue' }} /> : <Edit style={{ color: 'skyblue' }} />}
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography style={{fontWeight:'bold'}}>{texts[index]}</Typography>}/>
                                    </ListItemButton>
                                </ListItem>
                            );
                        }
                    })}
                </List>
            </Drawer>
        </Box>
    );
}

export default Sidebar;