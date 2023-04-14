import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'toggleButton',
    initialState: {    
        id:"",    
        toggleModalButtonSlice: false,        
    },
    reducers: {
        toggleButtonOn(state) {
            return {...state, toggleModalButtonSlice: true}
        },
        toggleButtonOff(state){
            return {...state, toggleModalButtonSlice: false}            
        },
        saveID(state, { payload }) {
            return {...state, id: payload}
        },
        
        
    }

})

export const { toggleButtonOn, toggleButtonOff, saveID } = slice.actions

export const selectButton = state => state.button

export default slice.reducer