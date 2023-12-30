import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themes/themeSlice";
import popupReducer from "../features/popups/popup";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        popup: popupReducer,
    }
}) 