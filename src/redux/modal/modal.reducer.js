import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataModal: null,
  status: 'false',
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addToDataModal: (state, { payload }) => {
      state.dataModal = payload;
      state.status = 'true';
    },
    closeModal: (state) => {
      state.status = 'false';
      state.dataModal = null;
    },
  },
});

export const { addToDataModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
