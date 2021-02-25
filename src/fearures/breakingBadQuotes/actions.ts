import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
  

export const quotes = createAsyncThunk(
    "breakingbadQuotes/quotes",
    async (url : string) => {
      return await getQuotes(url);
    }
  );

  const getQuotes = (url: string) => {
    return axios.get(url);
  };