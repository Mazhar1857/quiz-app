import { configureStore } from "@reduxjs/toolkit"
import quizSubjectSlice from "./quizSubjectSlice";
import totalScoreSlice from "./totalScore";
import currentQuizQuestionSlice from "./currentQuizQuestion";

const store = configureStore({
    reducer: {
        subject: quizSubjectSlice.reducer,
        currentQuizQuestion: currentQuizQuestionSlice.reducer,
        score: totalScoreSlice.reducer
    }
})

export default store;