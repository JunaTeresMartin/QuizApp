import React from "react";
import "./Quiz.css";
const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>Which device is rqd for internet connection?</h2>
      <ul>
        <li>Modem</li>
        <li>Router</li>
        <li>LAN Cable</li>
        <li>Pen drive</li>
      </ul>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary" style={{ width: "50%" ,height:"50px"}}>Next</button>
      </div>

      <div className="index">1 of 5 questions</div>
    </div>
  );
};
export default Quiz;
