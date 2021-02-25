import { combineReducers } from "redux";
import breakingBadQuotesReducer, { breakingBadQuotesInitialState } from "../fearures/breakingBadQuotes/breakingBadQuotesSlice";
import dogImagesReducer, { dogImagesInitialState } from "../fearures/dogs/dogsSlice";


export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    breakingBadQuotes: breakingBadQuotesReducer,
    dogImages: dogImagesReducer
});


export { rootReducer};
