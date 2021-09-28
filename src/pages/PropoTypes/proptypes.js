import { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component{
  static defaultProps={
    name:'kevin'
  }
  render(){
    return (
      <h1>hello,{this.props.name}</h1>
    )
  }
}

Greeting.propTypes = {
  name:PropTypes.string
}

// Greeting.defaultProps={
//   name:'kevin'
// }
export default Greeting
