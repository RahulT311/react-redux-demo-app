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
        songs: [action.payload, ...state.songs],
      }
    case DELETE_QUOTE:
      return {
        songs: state.songs.filter((s, i) => i !== action.payload),
      }   
    case UPDATE_QUOTE:
      return {
        songs: state.songs.map((song, i) =>
          i === action.index
            ? { ...song, title: action.title, editing: false }
            : song
        ),
      }    
    default:
      return state
  }
}