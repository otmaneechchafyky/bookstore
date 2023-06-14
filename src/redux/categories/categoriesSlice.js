import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesList: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.categoriesList = 'Under construction';
    },
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
