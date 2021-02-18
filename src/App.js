
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Food from './category/Food';
import Animal from './category/Animal';

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
        <Food></Food>
        <Animal></Animal>
        <Button variant="primary">Primary</Button>{' '}        
        <Button variant="primary">Primary</Button>{' '}
      </ul>
    )
  }
}

export default App;
