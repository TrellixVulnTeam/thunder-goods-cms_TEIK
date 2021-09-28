import React, {Component} from 'react';
import Profile from './pages/Header/Profile.js'
import myContext from "./pages/Header/context.js";


class App extends Component {
  constructor() {
    super();
    this.state={
      nickname:'kevin',
      level:100
    }
  }
  render() {
    return (
      <div>
        <myContext.Provider value={this.state}>
          <Profile></Profile>
        </myContext.Provider>
        <hr/>
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
