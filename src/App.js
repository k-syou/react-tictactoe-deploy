import { useState } from "react";
import "./App.css"
import Board from "./components/Board";

function App() {

  // init state
  const [history, setHistory] = useState([{squares : Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  // Check the winner
  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null;
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    if (stepNumber === 9) {
      status = 'Draw'
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  }

  // click square
  const handleClick = (i) => {
    const newHistory = history.slice(0,stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    };

    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, {squares : newSquares}]);
    // setXIsNext(!xIsNext);
    setXIsNext(prev => !prev);
    setStepNumber(newHistory.length);
  };

  const renderBoard = () => {
    return <Board squares={current.squares}
      onClick={(i) => handleClick(i)}
    />;
  }

  const jumpTo = (move) => {
    setStepNumber(move);
    setXIsNext((move % 2) === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ?
    'Go to move #' + move :
    'Go to game start';
    return (
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  });

  return(
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="game-board">
        {renderBoard()}
      </div>
      <div className="game-info">
        <h3 className='status'>{status}</h3>
        <ol style={{listStyle: 'none'}}>{moves}</ol>
      </div>
    </div>
    )
}

export default App;
