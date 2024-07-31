import { createSlice } from "@reduxjs/toolkit";
// 
export const authSlice = createSlice({
    name : "user",
    initialState : {
        value : {
            id : 1, 
            isLogged : false, 
            token : null, 
            // isError: null, 
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
        // createError(state, action){
        //     // { type, payload } isError = boolean
        //     state.value.isError = action.payload.isError
        // },
    }
});

export const {createUser, createToken, login, logout} = authSlice.actions
export default authSlice.reducer