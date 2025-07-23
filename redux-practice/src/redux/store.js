import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import themeReducer from './theme';

export default configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
    }, // state를 관리할 공간
})