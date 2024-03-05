import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../helpers";
import axios from "axios";


// import { Notify } from "notiflix";

export const fetchCarsList = createAsyncThunk(
    'carsList',
    async (_, thunkApi) => {
      try {
        const { data } = await axios.get(`${BASE_URL}/advert`);
        
        return data;
      } catch (err) {
    
        
        return thunkApi.rejectWithValue(err.message);
      }
    }
  );

  
