import React, { useState } from "react"
import styled from "styled-components"
import { Button } from '@mui/material'
import { Link } from "react-router-dom"
import Axios from "axios"
import { PlusCircleOutlined } from "@ant-design/icons"
import { Input } from "antd"

const DetailDiv = styled.div`
    div {
        margin-bottom: 2rem;
        width: 320px;
        
    }
`

const { TextArea } = Input

const DetailList = (props) => {
    return (
        <DetailDiv>
            {props.countList && props.countList.map((item, i) => (
                <div key={i}>
                    <label>내용</label>
                    <div>
                        <form className={i*10}>
                        <input type="file" name="file" onChange={null}/>
                        <TextArea
                            autoSize={{ minRows: 10, maxRows: 10}}
                        />
                        </form>
                    </div>
                </div>
            ))}
        </DetailDiv>
    )
}
export default DetailList