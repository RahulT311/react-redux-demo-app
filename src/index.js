import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
