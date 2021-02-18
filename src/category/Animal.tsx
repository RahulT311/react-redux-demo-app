import  React from 'react';
import axios from 'axios';
interface State {
    persons: any[];
  }
class Animal extends React.Component<{}, State> {
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
      Animal
    </ul>
  )
}
}

export default Animal;
