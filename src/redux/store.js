import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import preferenceReducer from "./preferenceSlice";
import loginReducer from "./loginSlice";
import loanReducer from "./loanSlice";
import bookmarkReducer from "./bookmarkSlice";


export const store = configureStore({
    reducer: {
        book: bookReducer,
        preference: preferenceReducer,
        login: loginReducer,
        loan: loanReducer,
        bookmark: bookmarkReducer
    }
});