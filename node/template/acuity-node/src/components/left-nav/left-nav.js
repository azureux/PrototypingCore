import React, { Component } from 'react';
import "./left-nav.css";

class LeftNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["App Services", "Virtual Machines", "All Services"],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <li className="left-nav-btn" key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LeftNav;