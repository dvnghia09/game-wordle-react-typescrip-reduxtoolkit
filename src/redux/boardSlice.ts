import { createSlice } from "@reduxjs/toolkit"
import wordList from "../words.json"
const random = Math.floor(Math.random() * wordList.words.length);
console.log(wordList.words[random])
const initialState = {
    board: ["", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", ""],
    position: 0,
    row: 0,
    correctWord: wordList.words[random].toLocaleUpperCase()
}

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setBoard: (state, action) => {
            state.board = action.payload
        },
        increasePosition: (state) => {
            state.position++;
        },
        decreasePosition: (state) => {
            state.position--;
        },
        increaseRow: (state) => {
            state.row++;
        },
        // setKey: (state,action) => {
        //     state.key = action.payload;
        // }
    }
})

export default boardSlice;
