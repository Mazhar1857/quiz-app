import { createSlice } from "@reduxjs/toolkit";

const currentQuizQuestionSlice = createSlice({
    name: 'currentQuizQuestion',
    initialState: 0,
    reducers: {
        currentQuestion: (state, action) => {
            return action.payload;
        }
    }
})

export default currentQuizQuestionSlice;
export const currentQuizQuestionAction = currentQuizQuestionSlice.actions;