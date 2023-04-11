import React, { Component } from "react";
import { Link } from "react-router-dom"

 
class Footer extends Component {
  render() {
    return (
      <div>
        <nav>
        <ul>
          <li>
            <Link to="https://www.github.com/k3nsah" target="_blank" rel="noopener noreferrer" >Copyright @ 2023 - made by @k3nsah</Link>
          </li>
        </ul>
      </nav>
      </div>
    );
  }
}
 
export default Footer;