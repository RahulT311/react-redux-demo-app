import { createSlice } from '@reduxjs/toolkit'
import { ReduxAction } from '../../constants';
import { Phase } from '../../constants/phase'
import { quotes } from './actions';

export const breakingBadQuotesInitialState : QuotesState = {
    phase : Phase.INIT,
    quotes: [],
    errorMessage: ''
  }
  export interface QuotesState {
    phase : Phase
    quotes: Quote[]
    errorMessage : string
  }
  export interface Quote {
    quote : string,
    author : string,
  }
export const slice = createSlice({
  name: 'breakingBadQuotes',
  initialState: breakingBadQuotesInitialState,
  reducers: {},
  extraReducers: {      
    [quotes.pending.toString()]: (
      state: any,
      action: any
    ) => {
      state.phase = Phase.LOADING;
    },
    [quotes.fulfilled.toString()]: (
      state: any,
      action: any
    ) => {
      state.quotes = action.payload.data;
      state.phase = Phase.SUCCESS;
    },
    [quotes.rejected.toString()]: (
      state: any,
      action: any
    ) => {
      state.phase = Phase.ERROR;
      state.errorMessage = action.error.message;
    },
    
  },
})


export default slice.reducer