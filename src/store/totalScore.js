import { createSlice } from "@reduxjs/toolkit";

const totalScoreSlice = createSlice({
    name: 'score',
    initialState: 0,
    reducers: {
        addScore: (state, action) => {
            if (action.payload == undefined) {
                return (state + 1);
            } else {
                return action.payload;
            }

        }
    }
})

export default totalScoreSlice;
export const totalScoreAction = totalScoreSlice.actions;