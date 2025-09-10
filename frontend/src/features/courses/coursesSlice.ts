import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse, Course } from '../../types/global';
import * as api from '../../services/api';
interface CoursesState { courses: Course[]; loading: boolean; error: string | null; }
const initialState: CoursesState = { courses: [], loading: false, error: null, };
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => { const response = await api.fetchCourses(); return response.data; });
const coursesSlice = createSlice({ name: 'courses', initialState, reducers: {}, extraReducers: (builder) => { builder.addCase(fetchCourses.pending, (state) => { state.loading = true; state.error = null; }).addCase(fetchCourses.fulfilled, (state, action: PayloadAction<Course[]>) => { state.loading = false; state.courses = action.payload; }).addCase(fetchCourses.rejected, (state, action) => { state.loading = false; state.error = action.error.message || 'Failed to fetch courses'; }); }, });
export default coursesSlice.reducer;