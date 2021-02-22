import {
  ADD_QUOTE, DELETE_QUOTE, UPDATE_QUOTE
 } from "../constants"

const initialState = {
  quotes: [
    { title: "I am not in danger, Skyler. I AM the danger!", author : 'Walter White', editing: false },
    { title: "I am not in danger, Skyler. I AM the danger!", author : 'Walter White', editing: false },
    { title: "I am not in danger, Skyler. I AM the danger!", author : 'Walter White', editing: false },
  ],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_QUOTE:
      return {
        quotes: [action.payload, ...state.quotes],
      }
    case DELETE_QUOTE:
      return {
        quotes: state.quotes.filter((s, i) => i !== action.payload),
      }   
    case UPDATE_QUOTE:
      return {
        quotes: state.quotes.map((quote, i) =>
          i === action.index
            ? { ...quote, title: action.title, editing: false }
            : quote
        ),
      }    
    default:
      return state
  }
}