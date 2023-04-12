import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        isActive: false,
    },
    reducers: {
        login(state, { payload }) {
            return {...state, isActive: true, username: payload}
        },
        logout(state){
            return {...state, isActive: false, username: ''}            
        }
    }

})

export const { login, logout } = slice.actions

export const selectButton = state => state.button

export default slice.reducer