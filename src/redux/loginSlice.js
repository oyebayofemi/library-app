import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isAnonymous: false,
        users: [],
        currentUser: [],
        isLogin: false,
        userID: ""
    },
    reducers: {
        setAnonymous: (state) => {
            // console.log("Toggle allow delete");
            state.isAnonymous = true;
            state.currentUser = null
        },
        setUser: (state, action) => {
            state.users = action.payload;
            // console.log(state.users);
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setCurrentUserID: (state, action) => {
            state.userID = action.payload;
        },
        restUser: (state) => {
            state.currentUser = [];
            state.userID = ""
            state.isLogin = false
            state.isAnonymous = false
        },

    }
});

export const { setAnonymous, setUser, setCurrentUser, setCurrentUserID, setAppLoad, restUser } = loginSlice.actions;
export default loginSlice.reducer;