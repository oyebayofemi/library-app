import { createSlice } from "@reduxjs/toolkit";

export const preferenceSlice = createSlice({
    name: 'preference',
    initialState: {
        isShowHeader: true,
    },
    reducers: {
        allowShowHeader: (state, action) => {
            // console.log("Toggle allow delete");
            state.isShowHeader = action.payload;
        }
    }
});

export const { allowShowHeader } = preferenceSlice.actions;
export default preferenceSlice.reducer;