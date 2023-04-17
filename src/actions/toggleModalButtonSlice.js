import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'toggleButton',
    initialState: {    
        id:"",    
        title:"",    
        content:"",    
        toggleDelete: false,        
        toggleEdit: false,        
        toggleText: false,        
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
        toggleTextOn(state) {
            return {...state, toggleText: true}
        },
        toggleTextOff(state){
            return {...state, toggleText: false}            
        },


        saveID(state, { payload }) {
            return {...state, id: payload}
        },
        saveTitle(state, { payload }) {
            return {...state, title: payload}
        },
        saveContent(state, { payload }) {
            return {...state, content: payload}
        },
        
        
    }

})

export const { toggleDeleteOn, toggleDeleteOff, toggleEditOn, toggleEditOff, toggleTextOn, toggleTextOff, saveID, saveTitle, saveContent } = slice.actions

export const selectButton = state => state.button

export default slice.reducer