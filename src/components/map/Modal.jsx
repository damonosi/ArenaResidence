import React from "react";
import "./Modal.styles.scss";
const Modalul = () => {
  const handleClose = (e) => {
    e.preventDefault();
    var element = document.getElementById("container");
    element.classList.add("closestyle");
  };

  return (
    <div id="container" className="modal-container">
      <h1>Plan parter</h1>

      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Modalul;
