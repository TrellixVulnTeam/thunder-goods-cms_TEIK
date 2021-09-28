import React, {Component} from 'react';
import Header from './Header';
class Profile extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}></Header>
      </div>
    );
  }
}

export default Profile;
