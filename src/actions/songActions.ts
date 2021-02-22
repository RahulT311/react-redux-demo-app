import {
    ADD_SONG,
    DELETE_SONG,
    EDIT_SONG,
    UPDATE_SONG,
    CANCEL_EDIT,
  } from '../constants'
  
  export const addSong = (song: any) => {
    return {
      type: ADD_SONG,
      payload: song,
    }
  }
  
  export const removeSong = (index : number) => {
    return {
      type: DELETE_SONG,
      payload: index,
    }
  }
  
  export const editSong = (index : number) => {
    return {
      type: EDIT_SONG,
      payload: index,
    }
  }
  
  export const updateSong = (title : string, index : number) => {
    return {
      type: UPDATE_SONG,
      title,
      index,
    }
  }
  
  export const cancelEdit = (index : number) => {
    return {
      type: CANCEL_EDIT,
      index,
    }
  }