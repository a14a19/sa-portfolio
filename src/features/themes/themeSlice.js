import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showThemeBtn: false,
    theme: "black",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, { payload }) => {
            state.theme = payload.theme;
            state.showThemeBtn = !state.showThemeBtn;
            localStorage.setItem("theme", payload.theme)
        },
        initialTheme: (state, { payload }) => {
            state.theme = payload.theme;
            localStorage.setItem("theme", payload.theme)
        },
        toggleThemeBtn: (state) => {
            state.showThemeBtn = !state.showThemeBtn;
        }
    }
})

export const { changeTheme, toggleThemeBtn, initialTheme } = themeSlice.actions;

export default themeSlice.reducer;