import React from "react";
import contacts from "../contacts";

function App(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.contact.name}</h2>
          <img
            className="circle-img"
            src={props.contact.imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>{props.contact.phone}</p>
          <p>{props.contact.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
