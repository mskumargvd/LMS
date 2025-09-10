import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse, User } from '../../types/global';
import * as api from '../../services/api';
interface AuthState { user: User | null; loading: boolean; error: string | null; token: string | null; }
const initialState: AuthState = { user: null, loading: false, error: null, token: null, };
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials: { email: string; password: string }) => { const response = await api.login(credentials.email, credentials.password); return response.data; });
export const authSlice = createSlice({ name: 'auth', initialState, reducers: { logout(state) { state.user = null; state.token = null; state.error = null; state.loading = false; }, }, extraReducers: (builder) => { builder.addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; }).addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => { state.loading = false; state.user = action.payload.user; state.token = action.payload.accessToken; }).addCase(loginUser.rejected, (state, action) => { state.loading = false; state.error = action.error.message || 'Login failed!'; }); }, });
export const { logout } = authSlice.actions;
export default authSlice.reducer;