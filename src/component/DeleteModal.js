import React, { Component } from "react";
import Button from "./Button";
import "../style/DeleteModal.css";

const DeleteModal = ({ isremove, remove, cancel }) => {
  if (isremove) {
    return (
      <div className="modal-container">
        <div className="modal-box">
          <h3>Are you sure delete this task?</h3>
          <div className="btn-group">
            <Button text="yes" varian="blue" action={remove} />
            <Button text="no" varian="red" action={cancel} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default DeleteModal;
