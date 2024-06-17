import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authentication/userSlice";

export const store = configureStore({
    reducer : {
        login : userReducer,
    },
})