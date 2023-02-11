import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";

export default configureStore({
    reducer: {
        board: boardSlice.reducer
    },
})