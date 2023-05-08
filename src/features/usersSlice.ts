import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Customer } from 'constants/types'
import { api } from 'utils/axios'

interface UsersState {
    data: Customer[];
    error: boolean;
}

const initialState : UsersState = {
    data: [],
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
        builder.addCase(listUsers.fulfilled, (state, action) => {
            state.data = action.payload['data']
            state.error = action.payload['error']
        })
        builder.addCase(listUsers.rejected, (state, action) => {
            state.data = action.payload['data']
            state.error = action.payload['error']
        })
    }
})

export const listUsers = createAsyncThunk(
    "users/list",
    async (data, thunkAPI) => {
        try {
            const res = await api.get('/users')
            return {
                data: res.data.map(e => ({ ...e, status: 'Active', isBlacklisted: false })),
                error: false,
            }
        } catch (error: any) { 
            return {
                data: [],
                error: true
            }
        }
    }
)


export const { setUsers, updateUser } = usersSlice.actions 
export default usersSlice.reducer