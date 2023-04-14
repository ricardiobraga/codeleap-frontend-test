import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'reload',
    initialState: {
        
        reload: false,
        
    },
    reducers: {
        reload(state) {
            return {...state, reload: true}
        },
        reloadOff(state){
            return {...state, reload: false }            
        },    
        
    }

})

export const { reloadOn, reloadOff, } = slice.actions

export const selectButton = state => state

export default slice.reducer