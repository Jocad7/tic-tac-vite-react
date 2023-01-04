import { Square } from '../components/Square';
import styled from 'styled-components';
import './App.css'
import { useEffect, useState } from 'react';

const Container = styled.div`
display: flex;
`;
const Title = styled.h1`
  font-size: 20px;
`;

function Board({ xIsNext, squares, onPlay, history }) {
  const [bg, setBg] = useState(null);
  
  function handleClick(i){
    if(calculateWinner(squares) || squares[i] ){
      return;
    }
    const nextSquares = [...squares];
    nextSquares[i]= xIsNext ? 'x' : 'o';
    onPlay(nextSquares); 
  }
  /*with this validation i check if all the squares are played, this way i put the message for Draw*/
  const squareLeftValidation = history[history.length - 1].every(item => item !== null)
  const winner = calculateWinner(squares);
  const squareWinner = !!squareLine(squares);
  
  useEffect(()=> {
    setBg(squareLine(squares))
  }, [squareWinner]);
  

  let status = winner 
  ? `Winner is: ${winner} 🏆`
  : `Next player is: ${xIsNext ? 'X' : 'O'}`;
  
  return(
    <>
      <Title>
        {(squareLeftValidation && !winner) ? 'Draw 🎭' : status}
      </Title>
      <Container>
        <Square
        index={0}
        bgState={bg}
        value={squares[0]}
        onSquareClick={()=> handleClick(0)}/>
        <Square
        index={1}
        bgState={bg} 
        value={squares[1]} onSquareClick={()=> handleClick(1)}/>
        <Square 
        index={2}
        bgState={bg}
        value={squares[2]} onSquareClick={()=> handleClick(2)}/>
      </Container>
      <Container>
        <Square
        index={3}
        bgState={bg}
        value={squares[3]} onSquareClick={()=> handleClick(3)}/>
        <Square
        index={4}
        bgState={bg}
        value={squares[4]} onSquareClick={()=> handleClick(4)}/>
        <Square
        index={5}
        bgState={bg}
        value={squares[5]} onSquareClick={()=> handleClick(5)}/>
      </Container>
      <Container>
        <Square
        index={6}
        bgState={bg}
        value={squares[6]} onSquareClick={()=> handleClick(6)}/>
        <Square
        index={7}
        bgState={bg}
        value={squares[7]} onSquareClick={()=> handleClick(7)}/>
        <Square
        index={8}
        bgState={bg}
        value={squares[8]} onSquareClick={()=> handleClick(8)}/>
      </Container>
        
    </>
  )
}

function squareLine(squares){
  const winnerSq =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for (let i = 0; i < winnerSq.length; i++) {
    const [a, b, c] = winnerSq[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      
      return winnerSq[i];
    }
  }

  return null;
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      
      return squares[a];
    }
  }

  return null;
}

export { Board }
