import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hideShow: false,
    title: ""
}

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        isHide: (state) => {
            state.hideShow = false;
        },
        isShow: (state, { payload }) => {
            state.hideShow = true;
            state.title = payload.title;
        },
    }
})

export const { isHide, isShow } = popupSlice.actions;

export default popupSlice.reducer;