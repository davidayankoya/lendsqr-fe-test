import { createSlice } from '@reduxjs/toolkit'


interface UIState {
    sidebarToggled: boolean;
}

const initialState : UIState = {
    sidebarToggled: true
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarToggled = !state.sidebarToggled
        },
    }
})

export default uiSlice.reducer