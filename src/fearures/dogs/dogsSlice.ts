import { createSlice } from '@reduxjs/toolkit'
import { Phase } from '../../constants/phase'
import { dogImages} from './actions';

export const dogImagesInitialState : DogImagesState = {
    phase : Phase.INIT,
    images: {message : '', status : 'failed'},
    errorMessage: ''
  }
  export interface DogImagesState {
    phase : Phase
    images: DogImage
    errorMessage : string
  }
  export interface DogImage {
    message : string,
    status : string,
  }
export const slice = createSlice({
  name: 'dogImages',
  initialState: dogImagesInitialState,
  reducers: {},
  extraReducers: {      
    [dogImages.pending.toString()]: (
      state: any,
      action: any
    ) => {
      state.phase = Phase.LOADING;
    },
    [dogImages.fulfilled.toString()]: (
      state: any,
      action: any
    ) => {
        debugger;
      state.images = action.payload.data;
      state.phase = Phase.SUCCESS;
    },
    [dogImages.rejected.toString()]: (
      state: any,
      action: any
    ) => {
      state.phase = Phase.ERROR;
      state.errorMessage = action.error.message;
    },
    
  },
})


export default slice.reducer