import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";
import contacts from "./contacts";

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <App contact={contacts[0]} />
    <App contact={contacts[1]} />
    <App contact={contacts[2]} />
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
