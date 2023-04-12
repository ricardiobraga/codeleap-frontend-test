import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'button',
    initialState: {
        button: '',
        isActive: false,
    },
    reducers: {
        inputFilled(state, { payload }) {
            return {...state, isActive: true, button: payload}
        },
        inputEmpty(state){
            return {...state, isActive: false, button: ''}            
        }
    }

})

export const { inputFilled, inputEmpty } = slice.actions

export const selectButton = state => state.button

export default slice.reducer