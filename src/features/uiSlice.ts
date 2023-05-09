import { createSlice } from '@reduxjs/toolkit'


interface UIState {
    isOpenSidebar: boolean;
    loading: boolean;
}

const initialState : UIState = {
    isOpenSidebar: false,
    loading: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state, action: { payload: boolean }) => {
            state.isOpenSidebar = action.payload
        },
        toggleLoading: (state, action: { payload: boolean }) => {
            state.loading = action.payload
        },
    }
})

export const { toggleSidebar, toggleLoading } = uiSlice.actions; 
export default uiSlice.reducer