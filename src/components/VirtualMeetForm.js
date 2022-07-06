import React from "react";
import { useState } from "react";
import "./form.css";
import Modal from "./Modal";
import axios from "axios";

function VirtualMeetForm() {
  const [hostName, setHostName] = useState("");
  const [hostEmail, setHostEmail] = useState("");
  const [participantsList, setParticipantsList] = useState(0);
  const [participantsEmails, setParticipantsEmails] = useState("");
  const [description, setDescription] = useState("");
  const [fromDateTime, setFromDateTime] = useState(new Date());
  const [toDateTime, setToDateTime] = useState(new Date());
  const [selectedTimes, setSelectedTimes] = useState({});
  const [viewModal, setViewModal] = useState(false);

  const handleSubmit = () => {
    const body = {
      hostName: hostName,
      hostEmail: hostEmail,
      participantsList: participantsList,
      participantsEmails: participantsEmails,
      description: description,
      fromDateTime: fromDateTime,
      toDateTime: toDateTime,
      selectedTimes: selectedTimes,
    };
    axios
      .post("http://localhost:8000/virtualForm", body)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <form
        className="my-form"
        onSubmit={(e) => {
          e.preventDefault();
          setViewModal(true);
          handleSubmit();
        }}
      >
        <div class="container">
          <h1>Enter Virtual Meet Details</h1>
          <ul>
            <li>
              <div class="flex">
                <div class="field-names">Host Name:</div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => setHostName(e.target.value)}
                  required
                />
              </div>
            </li>
            <li>
              <div class="flex">
                <div class="field-names">Host Email:</div>
                <input
                  type="email"
                  placeholder=""
                  onChange={(e) => setHostEmail(e.target.value)}
                  required
                />
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
                  onChange={(e) => setParticipantsList(e.target.value)}
                  required
                />
              </div>
            </li>
            <li>
              <div className="flex mt-10">
                <div className="field-names">From: </div>
                <input
                  type="datetime-local"
                  onChange={(e) => {
                    setFromDateTime(e.target.value);
                  }}
                ></input>
              </div>
              <div className="flex mt-10">
                <div className="field-names">To: </div>
                <input
                  type="datetime-local"
                  onChange={(e) => {
                    setToDateTime(e.target.value);
                  }}
                ></input>
              </div>
            </li>
            <li class="flex">
              <div class="field-names">Participants Email:</div>
              <input
                type="text"
                placeholder="enter emails seperated by comma"
                onChange={(e) => setParticipantsEmails(e.target.value)}
                required
              />
            </li>
            <li>
              {participantsEmails
                .split(",")
                .filter((t) => t !== "")
                .map((data) => {
                  return (
                    <div key={data} className="flex mt-10">
                      <div class="field-names">
                        Joining Time: <p className="ellipsis">{data}</p>{" "}
                      </div>
                      <input
                        type="time"
                        onChange={(e) => {
                          setSelectedTimes((selectedTimes) => ({
                            ...selectedTimes,
                            [data]: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  );
                })}
            </li>
            <li className="mt-10">
              <div className="flex">
                <div class="field-names">Description:</div>
                <textarea
                  placeholder="about meet"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
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
      {viewModal ? <Modal /> : null}
    </div>
  );
}

export default VirtualMeetForm;
