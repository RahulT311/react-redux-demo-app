import * as QuotesState from "../actions/actionTypes"
import { Phase } from "../constants/phase"
import { ReduxAction } from "../constants/reduxAction"
 export interface Quotes {
  phase : Phase
  quotes: Quote[]
  errorMessage : string
}
export interface Quote {
  quote : string,
  author : string,
}
export const initialState : Quotes = {
  phase : Phase.INIT,
  quotes: [],
  errorMessage: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action : ReduxAction) {
  switch (action.type) {
    case QuotesState.SET_QUOTES:
      return {
        quotes: action.payload,
      }
    
    case QuotesState.FETCHING_QUOTES:
        return action.type    
    case QuotesState.DELETE_QUOTE:
      return {
        quotes: state.quotes.filter((s, i) => i !== action.payload),
      }   
    case QuotesState.UPDATE_QUOTE:
      return {
        quotes: state.quotes.map((quote, i) =>
          i === action.payload.index
            ? { ...quote, title: action.payload.title, editing: false }
            : quote
        ),
      }    
    default:
      return state
  }
}