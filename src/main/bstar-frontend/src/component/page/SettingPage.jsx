import React, {useEffect, useState} from 'react';
import Sidebar from './Sidebar';
import { styled } from '@mui/material/styles';
import {Box, Typography, Divider, OutlinedInput, FormControl, TableContainer, 
    Table, TableHead, Button, TableRow, TableCell, Checkbox, TableBody, Paper, tableCellClasses} from '@mui/material';
import { Container } from '@mui/system';
import data from "../../data.json";
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.black,
        fontSize: 16,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
      },
}))

function SettingPage(props) {
    const id = "4"; //임시로 설정

    const person = data.find((person) => {
        return person.id === id;
    })

    const [inputs, setInputs] = useState({
        blogName: person.blogName,
        nickName: person.nickName,
        introduction: person.introduction,
        image: person.image,
        music: person.music,
        friends: person.friends, 
    })

    const [selected, setSelected] = useState([]);

    const onChangeInputs = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onInputImage = (e) => {
        const file = e.target.files;
        console.log(file);
        setInputs({
            ...inputs,
            image: file
        });
    }
    
    const onUploadImage = () => {

    }

    const onChangeData = () => {
        
    }

    const onSelectAllClick = (e) => {
        if (e.target.checked) {
            const newSelected = inputs.friends;
            setSelected(newSelected);
            return;
          }
          setSelected([]);
    }

    const onSelectClick = (id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    }

    const [info, setInfo] = useState([]);

        useEffect(() => {
            axios.get('/setting/info')
            .then(response => {setInfo(response.data); console.log(info)})
            .catch(error => console.log(error))
        }, []);

    const isSelected = (nickName) => selected.indexOf(nickName) !== -1;
    
    const onRemoveData = () => {

    }

    return (
        <Box>
            <Sidebar/>
            <Container maxWidth='md'>
                <Box 
                    sx={{
                        margin: '30px 0'
                    }}
                >
                    <Typography variant="h6">프로필 정보</Typography>
                    <Divider sx={{width: '40%', border: '2px solid skyblue', margin: '5px 0'}} />
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '200px',
                            margin: '40px 0',
                        }}
                    >
                        <FormControl sx={{marginBottom: '20px'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)', marginBottom: '10px'}}>블로그 명</label>
                            <OutlinedInput
                                name="blogName"
                                value={info.title}
                                onChange={onChangeInputs}
                            />
                        </FormControl>
                        <FormControl sx={{margin: '20px 0'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)', marginBottom: '10px'}}>별명</label>
                            <OutlinedInput 
                                name="nickName"
                                value={info.nickname}
                                onChange={onChangeInputs}
                            />
                        </FormControl>
                        <FormControl sx={{margin: '20px 0'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)', marginBottom: '10px'}}>프로필 소개글</label>
                            <OutlinedInput 
                                name="introduction"
                                value={info.intro}
                                onChange={onChangeInputs}
                            />
                        </FormControl>
                        <FormControl sx={{margin: '20px 0'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)'}}>프로필 사진</label>
                            <Box sx={{marginTop: '10px', display: 'flex'}}>
                                <input
                                    name="image"
                                    accept="image/*"
                                    type="file"
                                    onChange={onInputImage}
                                    id="image-button"
                                    style={{display: 'none'}}
                                />
                                <div>
                                    {inputs.image? (<img src={URL.createObjectURL(inputs.image[0])} alt="profileImage" width= '160px' height= '160px'/>) 
                                    : (<Box sx={{width: '160px', height: '160px', border: '1px solid rgba(0,0,0,0.25)', borderRadius: '5px'}}></Box>)}
                                </div>
                                <label htmlFor="image-button">
                                    <Button component="span" variant="outlined" onClick={onUploadImage} sx={{margin: '0 10px'}}>등록</Button>
                                </label>                
                            </Box>
                        </FormControl>
                        <FormControl sx={{marginTop: '20px'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)', marginBottom: '10px'}}>프로필 음악</label>
                            <OutlinedInput 
                                name="music"
                                value={inputs.music}
                                onChange={onChangeInputs}
                            /> 
                        </FormControl>
                    </Box> 
                    <Button variant="outlined" onClick={onChangeData}>수정</Button>
                </Box>
                <Box sx={{margin: '20px 0'}}>
                    <Typography variant="h6">이웃 관리</Typography>
                    <Divider sx={{width: '40%', border: '2px solid skyblue', margin: '5px 0'}} />
                    <TableContainer component={Paper} sx={{margin: "30px 0", width: '40%'}}>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>
                                        <Checkbox onChange={onSelectAllClick}/>
                                    </StyledTableCell>
                                    <StyledTableCell>이웃</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {inputs.friends.map((friend) => {
                                    const newFriend = data.find((person) => {
                                        return friend === person.id;
                                    });
                                    const isItemSelected = isSelected(newFriend.id);
                                    return(
                                        <TableRow 
                                            key={newFriend.nickName} 
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            onClick={() => onSelectClick(newFriend.id)}
                                            selected={isItemSelected}
                                        >
                                            <StyledTableCell>
                                                <Checkbox checked={isItemSelected}/>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                {newFriend.nickName} 
                                            </StyledTableCell>
                                        </TableRow>
                                    ); 
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button variant="outlined" onClick={onRemoveData}>삭제</Button>
                </Box>
            </Container>
        </Box>
    );
}

export default SettingPage;