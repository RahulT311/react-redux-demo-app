import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store'
import App from './App';
import BreakingBadQuotesList from './fearures/breakingBadQuotes/BreakingBadQuotes';
import Dogs from './fearures/dogs/Dogs';

const routing = (
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/quotes" component={BreakingBadQuotesList} />
      <Route path="/dogs" component={Dogs} />
    </div>
  </Router>
  </Provider>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);
