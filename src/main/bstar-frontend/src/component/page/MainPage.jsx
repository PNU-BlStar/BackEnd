import React, {useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import MainPageContent from '../ui/main/MainPageContent';
import {Link, Router} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";
import styled from "styled-components";
import {Input} from "antd";

function MainPage(props) {

    const navigate = useNavigate();

    const isFull = useMediaQuery({
        query : "(min-width:1440px)"
    });

    const isLarge = useMediaQuery({
        query : "(min-width:1250px) and (max-width:1439px)"
    });

    const isLargeMedium = useMediaQuery({
        query : "(min-width:850px) and (max-width:1249px)"
    });

    const isMedium = useMediaQuery({
        query : "(min-width:650px) and (max-width:849px)"
    });

    const isSmall = useMediaQuery({
        query : "(max-width:649px)"
    });

    const [data, setData] = useState(null);

        return (
            <div>
                {isFull && <MainPageContent style={{marginTop: '0.2%'}}> </MainPageContent>}
                {isLarge && <MainPageContent style={{marginTop: '2%'}}></MainPageContent>}
                {isLargeMedium && <MainPageContent style={{marginTop: '3.3%'}}></MainPageContent>}
                {isMedium && <MainPageContent style={{marginTop: '6%'}}></MainPageContent>}
                {isSmall && <MainPageContent style={{marginTop: '8%'}}></MainPageContent>}
            </div>
        );
}

export default MainPage;