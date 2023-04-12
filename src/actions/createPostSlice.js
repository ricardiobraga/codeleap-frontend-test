import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'editor',
    initialState: {
        input: '',
        textarea: '',
        isActive: false,
    },
    reducers: {
        inputFilled(state, { payload }) {
            return {...state, isActive: true, input: payload}
        },
        inputEmpty(state){
            return {...state, isActive: false, input: ''}            
        },
        textAreaFilled(state, { payload }) {
            return {...state, isActive: true, input: payload}
        },
        textAreaEmpty(state){
            return {...state, isActive: false, input: ''}            
        }
    }

})

export const { inputFilled, inputEmpty, textAreaFilled, textAreaEmpty } = slice.actions

export const selectButton = state => state.button

export default slice.reducer