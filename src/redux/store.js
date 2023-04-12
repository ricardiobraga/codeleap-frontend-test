import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../actions/userSlice';
import inputCheckReducer from '../actions/createPostInputSlice';


export default configureStore({
    reducer: {
        user: userReducer,
        inputCheck: inputCheckReducer
    }
})

