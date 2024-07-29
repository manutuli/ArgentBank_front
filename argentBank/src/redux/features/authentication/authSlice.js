import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     value : "initial state"
// }
export const authSlice = createSlice({
    name : "user",
    initialState : {
        value : {
            id : 1, 
            isLogged : false, 
            token : null, 
            // isRemember: null, 
            data : null,
        },
    },
    reducers : {
        createToken(state, action) {
            // { type, payload } token = "string"
            state.value.token = action.payload.token
        },
        login(state, action) {
            // { type, payload } isLogged = true
            state.value.isLogged = action.payload.isLogged
        },
        createUser(state, action) {
            // { type, payload } isLogged = false
            state.value.data = action.payload.data
        },
        remember(state, action){
            // { type, payload } isRemember = boolean
            state.value.isRemember = action.payload.isRemember
        },
    }
});

export const {createUser, createToken, login, logout, remember} = authSlice.actions
export default authSlice.reducer