import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Nevbar = () => {
  return (
    <div>
      <Link to="/">
        <Button variant="outline-secondary">Home</Button>{" "}
      </Link>
    </div>
  );
};
export default Nevbar;
