import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import SignUp from './components/SignUp';
import BreakingBadQuotesList from './components/BreakingBadQuotes';
import breakingBadQuotesReducer from './reducers/breakingBadQuotesReducer';

const store = createStore(breakingBadQuotesReducer, applyMiddleware(thunk));
const routing = (
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/quotes" component={BreakingBadQuotesList} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>
  </Provider>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);
