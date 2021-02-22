import axios from 'axios';
import {
  SET_QUOTES,
  DELETE_QUOTE,
  UPDATE_QUOTE,
  } from '../constants'
  
  export const addQuote = (quote: any) => {
    return {
      type: SET_QUOTES,
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
  export const myAction = (url : any) => {
    return dispatch => {
      dispatch({
        type: FETCHING_DATA,
        fetching: true
      })
      getSomeAsyncData(dispatch, url)
    }
  }
  async function getSomeAsyncData(dispatch : any, url : string) {
    try {
      const data = await axios.get(url).then(res => res.data)
      dispatch({
        type: SET_QUOTES,
        data: data
      })
    } catch (err) {
      dispatch({
        type: SET_QUOTES,
        data: null
      })
    }
    dispatch({
      type: FETCHING_QUOTES,
      fetching: false
    })
  }