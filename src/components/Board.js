import Square from './Square'
import React from 'react'
import './Board.css'

const Board = ({squares, onClick}) => {

  const renderSquare = (i) => {
    var value= squares[i];
    return <Square value={value} 
        onClick={() => onClick(i)}
      />
  };

  return (
    <div className='board-wrapper'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board
