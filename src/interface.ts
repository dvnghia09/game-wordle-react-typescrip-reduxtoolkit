interface boardState {
    board: string[],
    position: number,
    row: number,
    correctWord: string
}

export interface rootState {
    board: boardState
}