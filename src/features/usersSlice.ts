import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Customer } from 'constants/types'
import { api } from 'utils/axios'
import { toggleLoading } from './uiSlice';

interface UsersState {
    data: Customer[];
    loading: boolean;
    error: boolean;
}

const initialState : UsersState = {
    data: [],
    loading: false,
    error: false,
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action: { payload: [] }) => {
            state.data = action.payload
        },
        updateUser: (state, action: { payload: [id: string, data: any] }) => {
            state.data = state.data.map(e => e.id === action.payload[0] ? { ...e, ...action.payload[1]} : e)
        },
    },
    extraReducers(builder) {
        builder.addCase(listUsers.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(listUsers.fulfilled, (state, action) => {
            state.data = action.payload['data']
            state.loading = false
            state.error = action.payload['error']
        })
        builder.addCase(listUsers.rejected, (state, action) => {
            state.data = action.payload['data']
            state.loading = false
            state.error = action.payload['error']
        })
    }
})

export const listUsers = createAsyncThunk(
    "users/list",
    async (data, thunkAPI) => {
        thunkAPI.dispatch(toggleLoading(true))
        try {
            const res = await api.get('/users')
            res && thunkAPI.dispatch(toggleLoading(false))
            return {
                data: res.data.map(e => ({ ...e, status: 'Active', isBlacklisted: false })),
                error: false,
            }
        } catch (error: any) {
            thunkAPI.dispatch(toggleLoading(true))
            return {
                data: [],
                error: true
            }
        }
    }
)


export const { setUsers, updateUser } = usersSlice.actions 
export default usersSlice.reducer