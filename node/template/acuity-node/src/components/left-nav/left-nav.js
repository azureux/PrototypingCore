import React, { Component } from 'react';
import "./left-nav.css";
import logo from './../../logo.svg'

class LeftNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
        topNavigation: [
            {name: "Create a resource", icon: "svg"},
            {name: "Home", icon: "svg"},
            {name: "Dashboard", icon: "svg"},
            {name: "All services", icon: "svg"},
        ],
        resources: [
            {name: "App services", icon: "svg"},
            {name: "All resources", icon: "svg"},
            {name: "Function Apps", icon: "svg"},
            {name: "Resource groups", icon: "svg"},
            {name: "SQL databases", icon: "svg"},
            {name: "Virtual Machines", icon: "svg"},
            {name: "Load balancers", icon: "svg"},
            {name: "Storage accounts", icon: "svg"},
            {name: "Virtual networks", icon: "svg"},
            {name: "Azure Active Directory", icon: "svg"},
            {name: "Monitor", icon: "svg"},
            {name: "Advisor", icon: "svg"},
            {name: "Azure Cosmos DB", icon: "svg"},
            {name: "Security Center", icon: "svg"},
            {name: "Cost Management + Billing", icon: "svg"},
            {name: "Help + support", icon: "svg"},
        ],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.topNavigation.map(item => (
            <li className="left-nav-btn">
              <img src={ logo } />
               <div className="resource-name">{item.name}</div>
            </li>
          ))}

          <li className="left-nav-favorites">
            <div className="divider1"></div>
            <img src={ logo } />
            <div>Favorites</div>
            <div className="divider2"></div>
          </li>
         
          {this.state.resources.map(item => (
            <li className="left-nav-btn">
                <img src={ logo } /> 
                <div className="resource-name">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LeftNav;