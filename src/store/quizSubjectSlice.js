import { createSlice } from "@reduxjs/toolkit";

const quizSubjectSlice = createSlice({
    name: 'subject',
    initialState: null,
    reducers: {
        addSubject: (state, action) => {
            return action.payload;
        }
    }
})

export default quizSubjectSlice;
export const quizSubjectAction = quizSubjectSlice.actions;