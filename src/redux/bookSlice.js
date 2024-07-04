import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
    name: "book",
    initialState: {
        bookList: [],
        filterValue: "all",
        filterLabel: "All",
        filterBook: [],
        searchedBook: [],
        selectedBook: ""
    },
    reducers: {
        loadBookList: (state, action) => {
            console.log(action.payload);
            state.bookList = action.payload;
            state.filterBook = state.bookList
        },
        changeFilterList: (state, action) => {
            if (action.payload.value == "all") {
                console.log("Selecting all")

                state.filterBook = state.bookList

            } else if (action.payload.value == "novel") {
                const filiteredBookList = state.bookList.filter((book) => book.type == action.payload.value);
                console.log("Selecting Novel")
                console.log(filiteredBookList)

                state.filterBook = filiteredBookList;

            } else if (action.payload.value == "book") {
                const filiteredBookList = state.bookList.filter((book) => book.type == action.payload.value);
                console.log("Selecting Book")

                console.log(filiteredBookList)
                state.filterBook = filiteredBookList;

            }
        },
        findBook: (state, action) => {
            const word = action.payload
            const lowerCaseWord = word.toLowerCase();

            state.searchedBook = state.bookList.filter(book => book.title.toLowerCase().includes(lowerCaseWord));

            // console.log(state.searchedBook)
        },
        setSelectedBook: (state, action) => {
            state.selectedBook = action.payload
        },
        changeisBookMarked: (state, action) => {
            // state.selectedBook = action.payload
        }
    }
});

export const { loadBookList, changeFilterList, findBook, setSelectedBook, changeisBookMarked } = bookSlice.actions;
export default bookSlice.reducer;