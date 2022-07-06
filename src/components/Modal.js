import React from "react";
import "./Modal.css";
import { useEffect, useState } from "react";
import Axios from "axios";

const Modal = () => {
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");

  const fetchFileDetails = async () => {
    try {
      const res = await Axios.get(
        `http://localhost:8000/get/979901560609997500000`
      );
      if (res.status === 200) {
        console.log(res.data.avgTime);
        setTime(res.data.avgTime);
        setLink(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  fetchFileDetails();
  return (
    <div className="modalBackground">
      <div></div>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">What do you want to do? </div>
          <div className="buttons">
            <div className="modal-header">Your Meet Timing</div>
            <h2 className="modal-header">
              {time} {"\n"}
            </h2>
            <a className="modal-header" href="http://meet.google.com/new">
              {link}
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Modal;
