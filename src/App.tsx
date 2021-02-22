
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Route } from 'react-router-dom'

import './App.css';
class App extends React.Component {

  render() {
    return (
      <ul>                         
        <Route render={({ history}) => (
    <Button variant="primary"
      type='button'
      onClick={() => { history.push('/login') }}
    >
      Login
      </Button>
  )} />
  <Route render={({ history}) => (
    <Button variant="primary"
      type='button'
      onClick={() => { history.push('/signup') }}
    >
      Sign Up
      </Button>
  )} />
      </ul>
    )
  }
}

export default App;
