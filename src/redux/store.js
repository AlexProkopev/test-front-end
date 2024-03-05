import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
  } from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";
import { carsReducer } from "./car-data/carApi.reducer";
import { favoritesReducer } from "./favorites/favorites.reduser";
import persistReducer from "redux-persist/es/persistReducer";
import { filtersReducer } from "./filtres/filtres.reduser";
import { modalReducer } from "./modal/modal.reducer";

const favoritesConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
    reducer: {
      carsApi: carsReducer,
      favorites: persistReducer(favoritesConfig, favoritesReducer),
      filters: filtersReducer,
      modal:modalReducer,
    },
  
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);