import { createSlice } from '@reduxjs/toolkit';
import { IMAGES } from '../../app/shared/IMAGES';

const initialState = {
  aboutArray: IMAGES
};

const aboutSlice = createSlice({
  name: 'deadpools',
  initialState
});

export const aboutReducer = aboutSlice.reducer;

export const selectImageById = (id) => (state) => {
  debugger
  return state.deadpool.aboutArray.find(
    (deadpool) => deadpool.id === parseInt(id)
  );
}