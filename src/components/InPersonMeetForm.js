import "./form.css";
import Modal from "./Modal";
import React, { Component } from "react";

import "./Main.css";
class InPersonMeetForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <form
          className="my-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div class="container">
            <h1>Enter In Person Meet Details</h1>
            <ul>
              <li>
                <div class="flex">
                  <div class="field-names">Host Name:</div>
                  <input type="text" placeholder="" required />
                </div>
              </li>

              <li>
                <div class="flex">
                  <div class="field-names">Participants:</div>
                  <input
                    type="number"
                    placeholder="number of participants"
                    min="1"
                    max="5"
                    required
                  />
                </div>
              </li>
              <li>
                <div className="flex mt-10">
                  <div className="field-names">From: </div>
                  <input type="datetime-local"></input>
                </div>
                <div className="flex mt-10">
                  <div className="field-names">To: </div>
                  <input type="datetime-local"></input>
                </div>
              </li>
              <li class="flex">
                <div class="field-names">Participants Name:</div>
                <input
                  type="text"
                  placeholder="enter name's seperated by comma"
                  required
                />
              </li>

              <li className="mt-10">
                <div className="flex">
                  <div class="field-names">
                    Description and location suggestions:
                  </div>
                  <textarea placeholder="about meet" required></textarea>
                </div>
              </li>
              <li>
                <div class="grid grid-3">
                  <div class="required-msg">REQUIRED FIELDS</div>
                  <button class="btn-grid" type="submit">
                    <span class="back">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                        alt=""
                      />
                    </span>
                    <span class="front">SUBMIT</span>
                  </button>
                  <button class="btn-grid" type="reset">
                    <span class="back">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg"
                        alt=""
                      />
                    </span>
                    <span class="front">RESET</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default InPersonMeetForm;
