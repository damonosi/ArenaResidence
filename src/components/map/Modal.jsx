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
        <div className="butoni">
          <div class="outer">
            <div class="inner">
              <label onClick={onClose}>Back</label>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modalul;
