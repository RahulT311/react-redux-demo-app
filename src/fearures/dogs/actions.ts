import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
  

export const dogImages = createAsyncThunk(
    "dogs/images",
    async (url : string) => {
      return await getDogImages(url);
    }
  );

  const getDogImages = (url: string) => {
    return axios.get(url);
  };