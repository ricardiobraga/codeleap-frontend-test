import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'toggleButton',
    initialState: {    
        id:"",    
        toggleDelete: false,        
        toggleEdit: false,        
    },
    reducers: {
        toggleDeleteOn(state) {
            return {...state, toggleDelete: true}
        },
        toggleDeleteOff(state){
            return {...state, toggleDelete: false}            
        },
        toggleEditOn(state) {
            return {...state, toggleEdit: true}
        },
        toggleEditOff(state){
            return {...state, toggleEdit: false}            
        },


        saveID(state, { payload }) {
            return {...state, id: payload}
        },
        
        
    }

})

export const { toggleDeleteOn, toggleDeleteOff, toggleEditOn, toggleEditOff, saveID } = slice.actions

export const selectButton = state => state.button

export default slice.reducer