import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../actions/userSlice';
import inputCheckReducer from '../actions/createPostInputSlice';
import toggleButtonReducer from '../actions/toggleModalButtonSlice';
import reloadReducer from '../actions/realoadSlice';


export default configureStore({
    reducer: {
        user: userReducer,
        inputCheck: inputCheckReducer,
        toggleButton: toggleButtonReducer,
        reload: reloadReducer,
    }
})

