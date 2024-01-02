import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showThemeBtn: false,
    theme: "",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, { payload }) => {
            state.theme = payload.theme;
            localStorage.setItem("theme", payload.theme)
        },
        toggleThemeBtn: (state) => {
            state.showThemeBtn = !state.showThemeBtn;
        }
    }
})

export const { changeTheme, toggleThemeBtn } = themeSlice.actions;

export default themeSlice.reducer;