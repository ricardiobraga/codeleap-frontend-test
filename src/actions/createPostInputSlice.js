import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'inputCheck',
    initialState: {
        input: '',
        textarea: '',
        inputIsActive: false,
        textAreaIsActive: false,
    },
    reducers: {
        inputFilled(state, { payload }) {
            return {...state, inputIsActive: true, input: payload}
        },
        inputEmpty(state){
            return {...state, inputIsActive: false, input: ''}            
        },
        textAreaFilled(state, { payload }) {
            return {...state, textAreaIsActive: true, textarea: payload}
        },
        textAreaEmpty(state){
            return {...state, textAreaIsActive: false, textarea: ''}            
        }
        
    }

})

export const { inputFilled, inputEmpty, textAreaFilled, textAreaEmpty } = slice.actions

export const selectButton = state => state.button

export default slice.reducer