import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    isLoading: false,
    isError: null,
  };
  const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
      getFavorites: (state, { payload }) => {
        state.favorites = payload;
      },
      addToFavorites: (state, { payload }) => {
        state.favorites.push(payload);
      },
      deleteFromFavorites: (state, { payload }) => {
       
        const indexToDelete = state.favorites.findIndex(item => item?.id === payload);
        
        if (indexToDelete !== -1) {
          state.favorites.splice(indexToDelete, 1);
        }
      }
    }
  });
  
  export const { getFavorites,addToFavorites,deleteFromFavorites } =
  favoritesSlice.actions;
  
  export const favoritesReducer = favoritesSlice.reducer;
  