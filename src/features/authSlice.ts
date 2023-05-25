import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User } from 'constants/types'
const AUTH_TOKEN = 'lendsqr'

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}
interface Credentials { 
    email: string;
    password: string;
}

const sampleUser: User = {
    id: 1,
    firstName: 'Adedeji',
    lastName: 'Hussein',
    name: 'Adedeji Hussein',
    email: 'adedejihussein@example.com'
}

const initialState : AuthState = {
    user: null,
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state: AuthState) { 
            localStorage.setItem('userId', '');
            state.user = null;
            state.isAuthenticated = false;
        }
    },
    extraReducers(builder) { 
        builder.addCase(login.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.user = action.payload.user
        })
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.user = action.payload.user
        })
    },
})

export const login = createAsyncThunk(
    "auth/login",
    async (creds: Credentials, thunkAPI) => {
        localStorage.setItem('userId', AUTH_TOKEN)
        return {
            isAuthenticated: true,
            user: sampleUser
        }
    }
)

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async (data, thunkAPI) => {
        const authenticated = localStorage.getItem('userId') === AUTH_TOKEN
        return {
            isAuthenticated: authenticated,
            user: authenticated ? sampleUser : null 
        }
    }
)

export const { logout } = authSlice.actions 
export default authSlice.reducer