import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="totflex">
        <i className="fa-brands fa-gitter fa-2x"></i>
        <div className="grp">
          <Link to="/Mainpg" className="nav-link">
            <button> MainPage </button>
          </Link>
          <Link to="/VirtualMeet" className="nav-link">
            <button> Virtual Meet </button>
          </Link>
          <Link to="/InPersonMeet" className="nav-link">
            <button> In person meet </button>
          </Link>
          <Link to="/Signup" className="nav-link">
            <button> Contact us </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
