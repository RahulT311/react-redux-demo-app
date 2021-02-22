
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Route } from 'react-router-dom'

import './App.css';
class App extends React.Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>                         
        <Route render={({ history}) => (
    <Button variant="primary"
      type='button'
      onClick={() => { history.push('login') }}
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
