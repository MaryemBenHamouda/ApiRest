import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact List Full Stack Application</h1>
        <Link to="/allcontact">
          <Button variant="primary">All Contact</Button>{" "}
        </Link>
        <Link to="/addcontact">
          <Button variant="success">Add new Contact</Button>{" "}
        </Link>
      </header>
    </div>
  );
}

export default App;
