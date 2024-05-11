// import { createSlice } from '@reduxjs/toolkit';
// import { fetchTeachers } from './operations';

// const teachersInitialState = {
//   teachersItems: [],
//   isLoading: false,
//   error: null,
// };

// const teachersSlice = createSlice({
//   name: 'teachers',
//   initialState: teachersInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(fetchTeachers.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(fetchTeachers.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.teachersItems = action.payload;
//       })
//       .addCase(fetchTeachers.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// const teachersReducer = teachersSlice.reducer;
// export default teachersReducer;
