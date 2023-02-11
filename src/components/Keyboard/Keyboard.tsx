import React from 'react'
import Key from '../Key/Key';
import "./keyboard.css"
import { useSelector, useDispatch } from "react-redux";
import { rootState } from '../../interface';
import boardSlice from '../../redux/boardSlice'
import wordList from "../../words.json";

const Keyboard: React.FC = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  const board = useSelector((state: rootState) => state.board.board)
  const position = useSelector((state: rootState) => state.board.position)
  const row = useSelector((state: rootState) => state.board.row)
  const correctWord = useSelector((state: rootState) => state.board.correctWord)

  const dispatch = useDispatch()
  const handleBack = () => {
    if (position <= 0) return;
    if (position/5 === row) return;
    const newBoard = [...board];
    newBoard[position - 1] = '';
    dispatch(boardSlice.actions.setBoard(newBoard))
    dispatch(boardSlice.actions.decreasePosition())
  } 
  let allWords = wordList.words;
  let board5Words: string = `${board[position-5]}${board[position-4]}${board[position-3]}${board[position-2]}${board[position-1]}`.toLowerCase();
  const clickEnter = () => {
    // if (position % 5 === 0 && position !== 0) {
    //   dispatch(boardSlice.actions.increaseRow());
    // }
    if (allWords.includes(board5Words) === false) {
      alert('Không có word')
    }
    else if (allWords.includes(board5Words)) {
      if (position % 5 === 0 && position !== 0) {
        dispatch(boardSlice.actions.increaseRow());
      }
    }

    if (position === 30 && allWords.includes(board5Words) ) {
      alert("The word is: " + correctWord);
    }
  }
  return (
    <div className="keyboard-container">
      {rows.map((row, index) => {
        return (
            <div className="row" key={index}>
                {index === 2 && (<span className='letter-row' onClick={clickEnter}>Enter</span>)}
                {row.split(" ").map((key, idx) => {
                    return (
                        <div className="letter-row" key={idx}>
                            <Key letter={key.toUpperCase()} />
                            { key === 'm' && <span onClick={handleBack}>Back</span> }
                        </div>
                    )
                })}
            </div>
        )
      })}
    </div>
  )
}

export default Keyboard
