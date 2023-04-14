import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@/src/actions/userSlice';
import inputCheckReducer from '@/src/actions/createPostInputSlice';
import toggleButtonReducer from '@/src/actions/toggleModalButtonSlice';
import reloadReducer from '@/src/actions/realoadSlice';


export default configureStore({
    reducer: {
        user: userReducer,
        inputCheck: inputCheckReducer,
        toggleButton: toggleButtonReducer,
        reload: reloadReducer,
    }
})

