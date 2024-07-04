import { createSlice } from "@reduxjs/toolkit";

export const loanSlice = createSlice({
    name: "loan",
    initialState: {
        loanList: [],
    },
    reducers: {
        loadLoanList: (state, action) => {
            // console.log(action.payload);
            state.loanList = action.payload;
        },
        deleteloan: (state, action) => {
            const filteredLoan = state.loanList.filter((loan) => loan.id !== action.payload);

            state.loanList = filteredLoan;
        },
        addLoanData: (state, action) => {
            state.loanList.push(action.payload);
        }

    }
});

export const { loadLoanList, deleteloan, addLoanData } = loanSlice.actions;
export default loanSlice.reducer;