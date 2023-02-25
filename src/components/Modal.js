import React from "react";
import Button from "./Button";
const Modal = ({ task, onClose, onIsOpen, onDelete }) => {
  return (
    <>
      {onIsOpen && (
        <div id="myModal" className="modal">
          <div className="header-confirm">
            <h3>Confirm Delete</h3>
          </div>
          <div className="modal-content">
            <p>Do you want to delete task ?</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Button
              className="close"
              bgcolor="darkred"
              text="Confirm"
              onClick={() => onDelete(task._id)}
            />
            <Button
              className="close"
              bgcolor="gray"
              text="Cancel"
              onClick={() => onClose()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
