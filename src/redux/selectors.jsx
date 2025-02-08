export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserId = state => state.auth.userId;
export const selectFilter = state => state.filter.filter;
export const selectTeachers = state => state.teachers.teachers;
export const selectIsLoading = state => state.teachers.isLoading;
