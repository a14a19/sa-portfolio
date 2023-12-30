import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hideShow: false,
    title: ""
}

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        isHide: (state, { payload }) => {
            state.hideShow = false;
            console.log(state, payload)
        },
        isShow: (state, { payload }) => {
            state.hideShow = true;
            state.title = payload.title;
            console.log(state, payload)
        },
    }
})

export const { isHide, isShow } = popupSlice.actions;

export default popupSlice.reducer;