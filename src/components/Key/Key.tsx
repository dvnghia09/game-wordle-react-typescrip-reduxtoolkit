import React from 'react'
import './key.css'
import { useSelector, useDispatch } from "react-redux";
import { rootState } from '../../interface';
import boardSlice from '../../redux/boardSlice'

interface IProps {
    letter: string
}

const Key: React.FC<IProps> = (props) => {
  const {letter} = props
  const board = useSelector((state: rootState) => state.board.board)
  const position = useSelector((state: rootState) => state.board.position)
  const row = useSelector((state: rootState) => state.board.row)
  let currentRow = Math.floor(position/5);


  const dispatch = useDispatch()
  const chooseLetter = () => {
    if (position >= 30) return;
    if (currentRow > row) return;
    const newBoard = [...board];
    newBoard[position] = letter
    dispatch(boardSlice.actions.setBoard(newBoard))
    dispatch(boardSlice.actions.increasePosition())
  }
  return (
    <div className='letter' onClick={chooseLetter}>
      {letter}
    </div>
  )
}

export default Key
