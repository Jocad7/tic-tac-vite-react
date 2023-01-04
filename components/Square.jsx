import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Button = ({ className, onClick, children})=>(
    <button 
    className={className}
    onClick={onClick}
    >
        {children}
    </button>
);
const ButtonStyled = styled(Button)`
    width: 100px;
    height: 100px;
    padding: 0;
    font-size: 35px;
    font-weight: bold;
`;



function Square({ value, onSquareClick }){
    
    return(
        <>
            <ButtonStyled className="square" onClick={onSquareClick}>
                {value}
            </ButtonStyled>
        </>
    )
}

export { Square }