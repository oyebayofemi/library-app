import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState: {
        bookmarkList: [],
    },
    reducers: {
        loadBookmarkList: (state, action) => {
            // console.log(action.payload);
            state.bookmarkList = action.payload;
        },
        deleteBookmark: (state, action) => {
            const filteredBookmark = state.bookmarkList.filter((book) => book.id !== action.payload);

            state.bookmarkList = filteredBookmark;
        },
        addBookmarkData: (state, action) => {
            state.bookmarkList.push(action.payload);
        }

    }
});

export const { loadBookmarkList, deleteBookmark, addBookmarkData } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;