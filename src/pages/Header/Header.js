import React, {Component} from 'react';
import myContext from "./context";
class Header extends Component {
  static contextType = myContext
  render() {
    return (
      <div>
        <h1>姓名：{this.context.nickname}</h1>
        <h1>级别：{this.context.level}</h1>
      </div>
    );
  }
}

export default Header;
