import React from 'react';
import Heading from './components/Heading/Heading';
import './App.css';
import Board from './components/Board/Board';
import { useSelector } from "react-redux";
import { rootState } from './interface';

function App() {
  const board = useSelector((state: rootState) => state.board.board)
  return (
    <div className="App">
      <Heading type="h1" text="Game Wordiee" />
      <Heading type="subtitle" text="Anorther Wordle Clone"/>
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
