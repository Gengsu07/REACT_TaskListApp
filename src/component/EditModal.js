import React, { Component } from "react";
import Button from "./Button";
import "../style/EditModal.css";

class EditModal extends Component {
  render() {
    const { modal, close, change, save, data } = this.props;
    if (modal) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>Edit Task</h3>
            <div className="boxinput">
              <input
                className="input"
                type="text"
                value={data.title}
                onChange={change}
              />
            </div>
            <div className="btn-group">
              <Button text="save" varian="blue" action={save} />
              <Button text="cancel" varian="red" action={close} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default EditModal;
