import {
  ADD_QUOTE,
  DELETE_QUOTE,
  UPDATE_QUOTE,
  } from '../constants'
  
  export const addQuote = (quote: any) => {
    return {
      type: ADD_QUOTE,
      payload: quote,
    }
  }
  
  export const deleteQuote = (index : number) => {
    return {
      type: DELETE_QUOTE,
      payload: index,
    }
  }
  
  export const updateQuote = (title : string, index : number) => {
    return {
      type: UPDATE_QUOTE,
      title,
      index,
    }
  }