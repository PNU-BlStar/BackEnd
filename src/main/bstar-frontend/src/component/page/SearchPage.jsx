import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import {Box,InputBase, ListItem, Tab, Tabs, Select, Typography, FormControl, MenuItem, Pagination} from '@mui/material';
import { Container, styled } from '@mui/system';
import {SearchRounded} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";
import SearchList from '../list/SearchList';
import postData from '../../postData.json';

//사이드바, 검색 페이지 입력 연동을 위해 사용
export const store = {
    state: "",
    setState(value){
        this.state = value
        this.setters.forEach(setter => setter(this.state))
    },
    setters: []
}

store.setState = store.setState.bind(store);

export function useStore(){
    const [keyword, setKeyword] = useState(store.state);
    if(!store.setters.includes(setKeyword)){
        store.setters.push(setKeyword)
    }
    return [keyword, store.setState]
}

//사이드바 상태 전달
export const sideState = {
    state: 0,
    setState(value){
        this.state = value
        this.setters.forEach(setter => setter(this.state))
    },
    setters: []
}

sideState.setState = sideState.setState.bind(sideState);

export function useSideState(){
    const [state, setState] = useState(sideState.state);
    if(!sideState.setters.includes(setState)){
        sideState.setters.push(setState)
    }
    return [state, sideState.setState]
}

const Search = styled(ListItem)({
    width: '90%',
    borderRadius: '20px',
    marginLeft: '15px',
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
    fontSize: '17px',
});

const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
    ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: '40',
      width: '100%',
      backgroundColor: 'skyblue',
    },
});

const StyledResultText = styled(Box)({
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '20px',
})
  
const StyledTab = styled(Tab)({
    fontSize: '18px',
    '&.Mui-selected': {
        fontWeight: 'bold',
        color: 'rgba(23, 36, 40, 0.8)',
    },
});

function TabPanel(props) {
    const {children, value, index} = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    );
}

function SearchPage(props) {
    const [keyword, setKeyword] = useStore();
    const [word, setWord] = useState(); //입력된 검색어
    const [state, setState] = useSideState(); //사이드 바 상태
    const [tabState, setTabState] = useState(0); //글,사용자 탭 상태
    const [toggleState, setToggleState] = useState("블로그 내부 검색"); //블로그 내부 검색, 전체 검색 상태
    const [page, setPage] = useState(1); //현재 페이지
    const pageLimit = 5; //한 페이지에 나타날 검색 결과 개수
    const offset = (page - 1) * pageLimit;
    const navigate = useNavigate();
    const postCount = 6; //검색 결과 개수 받아오기
    
    useEffect(() => {
        setWord(keyword);
        setTabState(0);
        setToggleState("블로그 내부 검색");
    }, [state])

    return (
        <Box>
            <Sidebar/>
            <Container maxWidth='md' sx={{display: 'flex', 
                justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Box sx={{width: '50%', margin: '30px'}}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchRounded />
                        </SearchIconWrapper>
                        <SearchInput 
                            placeholder='검색어를 입력하세요.'
                            value={keyword}
                            onChange={(e) => {
                                setKeyword(e.target.value);
                            }}
                            onKeyUp={(e) => {
                                if(e.keyCode === 13){
                                    if(keyword === ""){
                                        alert('검색어를 입력해 주세요.');
                                    }
                                    else{
                                        setWord(keyword);
                                        setState(state + 1 % 10);
                                    } 
                                }   
                            }}
                        />
                    </Search>
                </Box>  
                {(state !== 0)? 
                <Box sx={{width: '100%', height: '80vh', typography: 'body1', marginTop:'10px'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <StyledTabs 
                            value={tabState} 
                            onChange={(e, newValue) => {setTabState(newValue)}}
                        >
                            <StyledTab label="글" />
                            <StyledTab label="사용자" />
                        </StyledTabs>
                    </Box>
                    <TabPanel value={tabState} index={0}>
                        <Box>
                            <Box sx={{display: 'inline-block'}}>
                                <FormControl>
                                    <Select
                                        value={toggleState}
                                        onChange={(e) => {setToggleState(e.target.value);}}
                                        displayEmpty
                                        sx={{fontSize: '14px', height: '30px'}}
                                    >
                                        <MenuItem value="블로그 내부 검색">블로그 내부 검색</MenuItem>
                                        <MenuItem value="전체 검색">전체 검색</MenuItem>
                                    </Select>
                                </FormControl>  
                            </Box>
                            {(toggleState === "블로그 내부 검색")? <StyledResultText>'{word}' 에 대한 블로그 내부 검색 결과 {postCount}건</StyledResultText> 
                                : <StyledResultText>'{word}' 에 대한 전체 검색 결과 {postCount}건</StyledResultText>}
                        </Box>
                    </TabPanel>
                    <TabPanel value={tabState} index={1}>'{word}' 에 대한 사용자 검색 결과 {postCount}건</TabPanel>
                    <Box sx={{width: '100%', margin: '10px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <SearchList 
                            posts={postData}
                            offset={offset}
                            pageLimit={pageLimit}
                            onClickItem={(item) => {
                                navigate(`/post/${item.post_id}`)
                            }}
                        />  
                        <Pagination count={Math.floor(postCount / pageLimit + 1)} onChange={(e) => setPage(e.target.textContent)} color="primary" variant="outlined" sx={{margin: '20px'}}/>
                    </Box>  
                </Box>: <Box></Box>}
            </Container>
        </Box>       
    );
}

export default SearchPage;