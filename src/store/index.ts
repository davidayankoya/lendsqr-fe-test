import {configureStore} from '@reduxjs/toolkit'
import uiReducer from 'features/uiSlice'
import authReducer from 'features/authSlice'
import usersReducer from 'features/usersSlice'


const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
        users: usersReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType < typeof store.getState >;

export default store