import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : localStorage.set({init: "initial state"})
}
export const userSlice = createSlice({
    name : "user",
    initialState : [
        {id : 1, isLogged : false, token : "token "},
        {id : 1, isLogged : true, token : "token "},
    ],
    reducers : {
        login(state, action) {
            // { type, payload }
            localStorage.set(action.payload)
        },
        logout(state, action) {
            // { type, payload }
            localStorage.set(action.payload)
        },
    }
});

export const {login, logout} = userSlice.actions
export default userSlice.reducer