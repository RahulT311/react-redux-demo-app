import  React from 'react';
import axios from 'axios';
interface State {
    persons: any[];
  }
class Food extends React.Component<{}, State> {
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
    return <h1>Food</h1>    
  }
}

export default Food;
