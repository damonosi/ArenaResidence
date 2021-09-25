import React from "react";
import ReactDom from "react-dom";
import "./imageModal.scss";

const ImageModal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="stil">
        <div className="but">
          <div className="butonus">
            <div className="outer">
              <div onClick={onClose} className="inner">
                <label>Back</label>
              </div>
            </div>
          </div>
        </div>
        <div className="child">{children}</div>
      </div>
    </>,
    document.getElementById("galerie")
  );
};

export default ImageModal;
