import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from '../redux/buttonSlice';
import editorReducer from '../actions/editorSlice';

export default configureStore({
    reducer: {
        inputCheck: buttonReducer,
        textareaCheck: editorReducer
    }
})

