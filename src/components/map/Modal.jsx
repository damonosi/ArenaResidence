import React from "react";
import "./Modal.styles.scss";
import ReactDom from "react-dom";

const Modalul = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="stil">
        {children}
        <div class="wrapper">
          <a href class="close-button">
            <div class="in">
              <div class="close-button-block"></div>
              <div class="close-button-block"></div>
            </div>
            <div class="out">
              <div class="close-button-block"></div>
              <div class="close-button-block"></div>
            </div>
          </a>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modalul;
