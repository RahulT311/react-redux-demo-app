import axios from 'axios';
import * as ActionTypes from './actionTypes';
  
  export const addQuote = (quote: any) => {
    return {
      type: ActionTypes.SET_QUOTES,
      payload: quote,
    }
  }
  
  export const deleteQuote = (index : number) => {
    return {
      type: ActionTypes.DELETE_QUOTE,
      payload: index,
    }
  }
  
  export const updateQuote = (title : string, index : number) => {
    return {
      type: ActionTypes.UPDATE_QUOTE,
      title,
      index,
    }
  }
  export const  fetchQuotes = (url : string) => {
    return (dispatch : any) => {      
        axios.get(url)
        .then(response => {
                    dispatch(addQuote(response.data));
        })
        .catch(error => {
          //error;
        })
    }
}