import React, { Component } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

class Mainpg extends Component {
  state = {};
  render() {
    return (
      <div className="mainbg">
        <div className="container">
          <div className="row">
            <Link to="/InPersonMeetForm">
              <div className="column">
                <div className="card" id="img1">
                  <p className="card-text">
                    Create an in person Meet with location and timing details
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/VirtualMeetForm">
              <div className="column">
                <div className="card" id="img2">
                  <p className="card-text">
                    Create an online virtual meet and invite participants
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Mainpg;
