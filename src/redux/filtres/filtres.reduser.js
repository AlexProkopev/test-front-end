import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carBrand: {},
  };
  const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      addToCarBrand: (state, { payload }) => {
        state.carBrand = payload;
      },
    
      
      
    }
  });
  
  export const { addToCarBrand } =
  filtersSlice.actions;
  
  export const filtersReducer = filtersSlice.reducer;
  