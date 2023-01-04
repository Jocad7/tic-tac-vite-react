import { useState } from 'react';
import { Square } from '../components/Square';
import styled from 'styled-components';
import './App.css'

const Container = styled.div`
display: flex;
`;
const Title = styled.h1`
  font-size: 10px;
`;

function Board({ xIsNext, squares, onPlay, history }) {
  function handleClick(i){
    
    if(calculateWinner(squares) || squares[i] ){
      return;
    }
    const nextSquares = [...squares];
    nextSquares[i]= xIsNext ? 'x' : 'o';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  // console.log(winner)
  let status = winner 
  ? `Winner is: ${winner}`
  : `Next player is: ${xIsNext ? 'X' : 'O'}`;
  
  return(
    <>
      <Title>{status}</Title>
      <Container>
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)}/>
      </Container>
      <Container>
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)}/>
      </Container>
      <Container>
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)}/>
      </Container>
        
    </>
  )
}

function calculateWinner(squares){
  const lines =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export { Board }
