import React, { useEffect, useState } from 'react';
import BoardComponent from './components/BoardComponent/BoardComponent';
import LostFiguresComponent from './components/LostFiguresComponent/LostFiguresComponent';
import TimerComponent from './components/TimerComponent/TimerComponent';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';
import './sass/style.scss';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer);
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className='app'>
      <TimerComponent 
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <BoardComponent 
        board={board} 
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFiguresComponent 
          title={"Черные фигуры"} 
          figures={board.lostBlackFigures}
        />
        <LostFiguresComponent 
          title={"Белые фигуры"} 
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  );
}

export default App;
