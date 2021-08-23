import React from "react";
import ReactDom from "react-dom";
import "./imageModal.scss";

const ImageModal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="stil">
        {children}
        <div className="butonus">
          <div className="outer">
            <div className="inner">
              <label onClick={onClose}>Back</label>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("galerie")
  );
};

export default ImageModal;
