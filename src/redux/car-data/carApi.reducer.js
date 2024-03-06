import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCarsList } from './services';



const initialState = {
  cars: null,
  isLoading: false,
  isError: null,
};

const carsSlice = createSlice({
  name: 'carList',
  initialState,
  reducers: {
       closePage: (state) => {
        state.isLoading = false;
        state.isError = null;
        state.cars = null;
       }
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCarsList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars = payload;
        
      })

      .addMatcher(isAnyOf(fetchCarsList.pending), (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addMatcher(isAnyOf(fetchCarsList.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      }),
});

export const { closePage } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
