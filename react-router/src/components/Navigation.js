import React, { Component } from "react";
import { Link } from "react-router-dom"


class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/HTMLPage">HTML</Link>
            </li>
            <li>
              <Link to="/JavaScriptPage">JavaScript</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;