import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "dark",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, { payload }) => {
            console.log(state.theme, payload)
        }
    }
})

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;