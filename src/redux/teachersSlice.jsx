import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers } from '../redux/operations';

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    teachers: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
