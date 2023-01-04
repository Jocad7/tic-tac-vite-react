import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Button = ({ className, onClick, children})=>(
    <button 
    className={className}
    onClick={onClick}
    >
        {children}
    </button>
);
const rotate = keyframes`
  from {
    transform: rotate(0deg) scale(1);
   
  }

  to {
    transform: rotate(360deg) scale(.5);
    
  }
`;

const ButtonStyled = styled(Button)`
    width: 100px;
    height: 100px;
    animation: ${props => props.anim} 1s ease-in-out 2;
    background:${props=>props.bg};
    padding: 0;
    font-size: 60px;
    font-weight: bold;
`;



function Square({ value, onSquareClick, bgState, index}){
    let validation = null;
    let animation = null;
    if(!!bgState){
        validation = bgState.some(i=> i=== index) && ' linear-gradient(to right, rgba(255,217,82,1) 0%, rgba(238,225,72,0.8) 40%, rgba(226,231,64,0.8) 69%);';
        animation = bgState.some(i=> i=== index) && rotate;
    }
    
    return(
        <>
            <ButtonStyled 
            className="square"
             bg={validation} 
             anim={animation}
             onClick={onSquareClick}>
                {value}
            </ButtonStyled>
        </>
    )
}

export { Square }